import uvicorn
from typing import Dict
# from models.user import User, Profile
from models.core import AcessPoint, NetworkConnection, SocialActions, UserSocialActions
from config.database import Base, engine
from routers.userRoutes import userRouter
from routers.userActions import userActions
from routers.auth import authRouter
from sqlalchemy import inspect
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.core import coreRouter


inspector = inspect(engine)

# Verificar se as tabelas já existem no banco de dados
existing_tables = inspector.get_table_names()
Base.metadata.create_all(bind=engine)

# if not existing_tables:
#     # Cria as tabelas apenas se elas ainda não existirem
#     Base.metadata.create_all(bind=engine)
# else:
#     Base.metadata.drop_all(bind=engine)
#     print("todas as tabelas foram deletadas")


app = FastAPI()

# Configuração de origens permitidas
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://127.0.0.1",
    "http://127.0.0.1:5500",
]

# Configuração do middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(userRouter)
app.include_router(userActions)
app.include_router(authRouter)
app.include_router(coreRouter)

@app.get("/")
def index() -> Dict:
    return {"hello": "world"}

if __name__ == "__main__":
    uvicorn.run(app, port=8080, host="localhost")