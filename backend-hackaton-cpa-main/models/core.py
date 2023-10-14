from config.database import Base
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from sqlalchemy import (
    Column, Enum, Integer, String, 
    ForeignKey, Boolean, DateTime, Index
)
from models.user import User

class AcessPoint(Base):
    """
    Modelo AcessPoint representando um ponto de acesso a rede.
    """
    __tablename__ = 'acess_points'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), unique=True, nullable=False)
    latitude = Column(String(50), nullable=False)
    longitude = Column(String(50), nullable=False)
    description = Column(String(500), nullable=True)
    is_active = Column(Boolean, default=True)

class NetworkConnection(Base):
    """
    Modelo NetworkConnection representando uma tentativa de conexao.
    """
    
    __tablename__ = 'network_connections'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    acess_point_id = Column(Integer, ForeignKey('acess_points.id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    connection_time = Column(DateTime, default=func.now())
    success_connection = Column(Boolean, nullable=False)


class SocialActions(Base):
    """
    Modelo SocialActions Representa as acoes sociais disponiveis.
    """
    __tablename__ = 'social_actions'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), unique=True, nullable=False)
    points_per_action = Column(Integer, nullable=False)


class UserSocialActions(Base):
    """
    Modelo UserSocialActions representa o registro de acao social de um usuario.
    """
    __tablename__ = 'user_social_actions'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    social_action_id = Column(Integer, ForeignKey('social_actions.id'), nullable=False)
    action_time = Column(DateTime, default=func.now())
    

        