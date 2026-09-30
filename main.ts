import { UserDAO } from "./UserDAO";

const userDAO = new UserDAO();

userDAO.insert('อำพร', 'amporn111@gmail.com');
userDAO.insert('กิตติ', 'kitti111@gmail.com');

const users = userDAO.findAll();
users.forEach(u => {
    console.log(u.getInfo());
});