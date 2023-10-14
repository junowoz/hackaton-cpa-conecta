from typing import List
from schemas.auth import *
from config.database import Session
from fastapi import APIRouter, Depends
from schemas.acess_point import CreateAcessPoint, CreateAcessPointResponse
from controllers.acess_point.acess_point_controller import AcessPointController
from config.dependencies import get_db

coreRouter = APIRouter(prefix='/core', tags=['core'])

@coreRouter.post('/acess_point', response_model=CreateAcessPointResponse)
async def create_acess_point(
    payload: CreateAcessPoint,
    db: Session = Depends(get_db)
) -> CreateAcessPointResponse:
    return AcessPointController(db).create_acess_point(payload)

@coreRouter.put('/acess_point', response_model=CreateAcessPointResponse)
async def update_acess_point(
    payload: CreateAcessPointResponse,
    db: Session = Depends(get_db)
) -> CreateAcessPointResponse:
    return AcessPointController(db).update_acess_point(payload)

@coreRouter.delete('/acess_point', response_model=CreateAcessPointResponse)
async def delete_acess_point(
    payload: CreateAcessPointResponse,
    db: Session = Depends(get_db)
) -> CreateAcessPointResponse:
    return AcessPointController(db).delete_acess_point(payload)


