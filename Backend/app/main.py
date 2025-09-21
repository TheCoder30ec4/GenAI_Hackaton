from fastapi import FastAPI, status, Depends, HTTPException
from . import auth, models, database, dependencies
import firebase_admin
from firebase_admin import credentials, initialize_app
import os

# Initialize Firebase Admin SDK
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
cred_path = os.path.join(BASE_DIR, "firebase-service-account.json")

cred = credentials.Certificate(cred_path)
initialize_app(cred)

# Create database tables
database.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Personalised AI Trip Planner")

app.include_router(auth.router, prefix="/auth", tags=["Auth"])

# Protected root route
@app.get("/")
def root(current_user=Depends(dependencies.get_current_user)):
    return {
        "message": f"Backend is running. Hello, {current_user.name}!",
        "user_email": current_user.email
    }

# Protected example route
@app.get("/users/me")
def read_users_me(current_user=Depends(dependencies.get_current_user)):
    return {
        "id": current_user.id,
        "name": current_user.name,
        "email": current_user.email
    }
