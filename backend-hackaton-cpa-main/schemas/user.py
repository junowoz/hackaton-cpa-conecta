from pydantic import BaseModel
from pydantic.types import Optional

class UserRequest(BaseModel):
    cpf: str
    password: str
    email: str
    

class UserResponse(BaseModel):
    cpf: str
    email: str
    
    class Config:
        orm_mode = True


class UserPassword(BaseModel):
    password: str
    confirm_password: str
    new_password: str

class UserUpdate(BaseModel):
    cpf: Optional[str]
    email: Optional[str]

class EmailRequest(BaseModel):
    email: str


class NewPasswordRequest(BaseModel):
    old_passwod: str
    new_password: str
    confirm_password: str

class ForgotPasswordRequest(BaseModel):
    token: str
    new_password: str
    confirm_password: str