from typing import List
from schemas.profile import *
from config.database import Session
from fastapi import APIRouter, Depends
from config.dependencies import get_db
from utils.auth import logged_user
from schemas.auth import *
from schemas.profile import *
from controllers.profileController import ProfileController

profileRouter = APIRouter(prefix="/profile", tags=['Profile'])

@profileRouter.post("/{user_id}")
async def create_profile(
    profile: ProfileRequest,
    user_id: int,
    user: SimpleUser = Depends(logged_user),
    db : Session = Depends(get_db)
):
    new_profile = ProfileController(db).create_profile(profile, user_id)
    return new_profile

@profileRouter.get("/{user_id}")
async def get_profile_byId(user: SimpleUser = Depends(logged_user), db : Session = Depends(get_db)):
    profile = ProfileController(db).get_profile(user)
    return profile