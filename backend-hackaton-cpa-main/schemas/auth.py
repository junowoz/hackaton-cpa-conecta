from pydantic import BaseModel, ValidationError, root_validator
from typing import Optional

class SimpleUser(BaseModel):
    id: Optional[int]
    cpf: str
    email: str
    is_admin: bool

    class Config:
        orm_mode = True

class Password(BaseModel):

    password: str
    new_password: str
    confirm_password: str
    
    class Config:
        orm_mode = True

class ResetPassword(BaseModel):

    email:str
    new_password: str
    confirm_password: str
    
    class Config:
        orm_mode = True

class ForgotPassword(BaseModel):
    email: str

    class Config:
        orm_mode = True
        
class Code(BaseModel):
    code: str

    class Config:
        orm_mode = True


class Login(BaseModel):
    cpf: str
    password: str

    class Config:
        orm_mode = True

class LoginSuccess(BaseModel):
    user: SimpleUser
    access_token: str
    message: str

    class Config:
        orm_mode = True