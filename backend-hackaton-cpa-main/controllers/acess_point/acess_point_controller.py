import bcrypt
from schemas.acess_point import CreateAcessPointResponse, CreateAcessPoint
from schemas.user import *
from sqlalchemy import or_
from decouple import config
from models.core import AcessPoint
from logs.logger import logger
from fastapi import HTTPException
from config.database import Session
from utils.email_utils import send_email
from sqlalchemy.exc import SQLAlchemyError
from itsdangerous import URLSafeTimedSerializer
from utils.user_utils import validate_user_data


class AcessPointController():
    def __init__(self, db: Session) -> None:
        self.db = db
    
    def list_acess_points(self):
        acess_points = self.db.query(AcessPoint).all()
        return acess_points
    
    def create_acess_point(
        self,
        payload: CreateAcessPoint
    ) -> CreateAcessPointResponse:
        try:
            existing_acess_point = self.db.query(AcessPoint).filter(
                AcessPoint.name == payload.name
            ).first()
            
            if existing_acess_point:
                raise HTTPException(status_code=409, detail="Acess Point already exists")
            
            new_acess_point = AcessPoint(
                name=payload.name,
                latitude=payload.latitude,
                longitude=payload.longitude,
                description=payload.description,
                is_active=True
            )
            
            self.db.add(new_acess_point)
            self.db.commit()
            self.db.refresh(new_acess_point)
            
            return new_acess_point
        except SQLAlchemyError as e:
            logger.error(e)
            raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
            
    def update_acess_point(
        self,
        payload: CreateAcessPointResponse
    ) -> CreateAcessPointResponse:
        pass
    
    
    def delete_acess_point(
        self,
        acess_point_id: int
    ) -> CreateAcessPointResponse:
        pass
    
        
    