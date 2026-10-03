from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    stuname:str
    studept:str
    stuusername:str
    stupassword:str
    stuage:int
    stumark:float
app=FastAPI()
#http://localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    return "Get students method called"
#http://localhost:8000/docs
@app.post("/addStudent")
def addStudent(stu:Student):
    return {"student_details":stu}
#http://localhost:8000/updateStudent
@app.put("/updateStudent")
def updateStudent():
    return "Update student method called"
#http://localhost:8000/deleteStudent
@app.delete("/deleteStudent")
def deleteStudent():
    return "Delete student method called"
#parameter
@app.get("/getParticularStudent/:{id}")
def getParticularStudent(id:int):
    return {"userid":id}
#localhost:8000/filterdept?dept="CSE"&mark=93
@app.get("/filterdept")
def filterdept(dept:str,mark:int):
    return {"Department":dept,"Mark":mark}