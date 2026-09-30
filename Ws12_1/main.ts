import { StudentDAO } from "./StudentDAO";

const studentDAO = new StudentDAO();

studentDAO.insert('684245011','อำพร', 3.28);
studentDAO.insert('684245029','กิตติ', 3.58);

const students = studentDAO.findAll();
let honor: string;
students.forEach(s => {
    if(s.isHonor() === true) honor = "เกียรตินิยม";
    else honor = "";
    console.log(`${s.getStudentCode()} ,${s.getFullname()},${s.getGpa()} ${honor}`);
})