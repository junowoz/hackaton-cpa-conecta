import re
from fastapi import HTTPException
from itsdangerous import URLSafeTimedSerializer
from smtplib import SMTP_SSL
from email.mime.text import MIMEText
from decouple import config
import secrets

blacklist = []

def valid_password(senha):
    # Verificar se tem pelo menos 8 caracteres
    if len(senha) < 8:
        return False
    
    # Verificar se tem pelo menos 1 número
    if not re.search(r'\d', senha):
        return False
    
    # Verificar se tem pelo menos 1 letra maiúscula
    if not re.search(r'[A-Z]', senha):
        return False
    
    # A senha atende a todos os critérios
    return True

def valid_username(username):
    # Verifica se o campo não está vazio
    if not username:
        return False

    # Verifica o tamanho do nome de usuário
    if len(username) > 10:
        return False

    # Verifica se o nome de usuário contém apenas letras, números e underscore (_)
    if not re.match("^[a-zA-Z0-9_]*$", username):
        return False

    # Verifica se o username começa com uma letra
    if not username[0].isalpha():
        return False

    return True

# def validate_cpf(cpf: str):
#     if not re.match(r'^\d{11}$', cpf):
#         return False
    
#     if len(cpf) != 14:
#         return False

def valid_email(email):
    # Verifica se o campo não está vazio
    if not email:
        return False
    
    # Verifica o formato do e-mail usando uma expressão regular
    if re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', email):
        return True
    
    return False

def validate_user_data(user):
    # if not validate_cpf(user.cpf):
    #     raise HTTPException(status_code=200, detail="Invalid cpf")

    if not valid_email(user.email):
        raise HTTPException(status_code=200, detail="Invalid email")

    if not valid_password(user.password):
        raise HTTPException(status_code=200, detail="Invalid password")
    
    # muda todos os caractéres do username para minusculo
    # user.username = user.username.lower()

def generate_reset_token():
    return secrets.token_urlsafe(32)