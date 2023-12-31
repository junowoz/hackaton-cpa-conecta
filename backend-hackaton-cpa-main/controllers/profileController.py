from sqlalchemy.orm import Session
from fastapi import HTTPException, Depends
from models.user import Profile
from schemas.profile import *
from sqlalchemy.exc import SQLAlchemyError
from logs.logger import logger

class ProfileController():
    def __init__(self, db: Session):
        self.db = db

    def get_profile(self, profile_id: int):
        profile = self.db.query(Profile).get(profile_id)
        if not profile:
            raise HTTPException(status_code=404, detail="Profile not found")
        return profile

    def create_profile(self, profile: ProfileCreate, logged_user_id:int):

        try:
            existing_profile: Profile = self.db.query(Profile).filter(
                Profile.user_id == logged_user_id
            ).first()
            # verifica se perfil ja existe
            if existing_profile:
                    raise HTTPException(status_code=409, detail="Profile already in use")
                
            new_profile = Profile(
                bio= profile.bio,
                full_name = profile.full_name,
                user_id = logged_user_id
            )
            self.db.add(new_profile)
            self.db.commit()
            self.db.refresh(new_profile)
            return new_profile
        except SQLAlchemyError as e:
            logger.error(e)
            raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


    def update_profile(self, logged_user_id: int, profile: ProfileUpdate):
        existing_profile: Profile = self.db.query(Profile).filter_by(Profile.user_id == logged_user_id)
        if not existing_profile:
            raise HTTPException(status_code=404, detail="Profile not found")
        if existing_profile.bio:
                existing_profile.bio = profile.bio
        if existing_profile.full_name:
                existing_profile.full_name = profile.full_name
        
        self.db.commit()
        self.db.refresh(existing_profile)
        return existing_profile



    def delete_profile(self, profile_id: int):
        profile = self.db.query(Profile).get(profile_id)
        if not profile:
            raise HTTPException(status_code=404, detail="Profile not found")
        self.db.delete(profile)
        self.db.commit()
        return {"message": "Profile deleted"}



    def get_all_profiles(self):
        profiles = self.db.query(Profile).all()
        return profiles


    