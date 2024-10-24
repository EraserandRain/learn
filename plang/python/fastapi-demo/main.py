from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

# 添加 CORS 中间件以支持开发环境的跨域请求
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite 默认开发服务器地址
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api")
async def root():
    return {"Hello": "Halo1"}

@app.get("/print")
async def print_message():
    print("Hello World")  # This will print in the FastAPI terminal
    return {"message": "Message printed in the terminal"}

# 确保生产环境下前端构建文件存在
if os.path.exists("frontend/dist"):
    app.mount("/", StaticFiles(directory="frontend/dist", html=True), name="static")