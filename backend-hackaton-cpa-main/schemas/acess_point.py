from pydantic import BaseModel, ConfigDict

class OurBaseModel(BaseModel):
    class Config:
        model_config = ConfigDict(from_attributes=True)

class CreateAcessPoint(OurBaseModel):
    name: str
    latitude: str
    longitude: str
    description: str
    
    class Config:
        orm_mode = True
    
class CreateAcessPointResponse(OurBaseModel):
    id: int
    name: str
    latitude: str
    longitude: str
    description: str
    is_active: bool
    
    class Config:
        orm_mode = True