import { Table } from "./module1.js";


const mahasiswa = new Table({
    columns: ["NPM","Nama", "Prodi"],
    data: [
      ["7704221001","Dimas Agung", "Teknik Kelistrikan"],
      ["7704221002","Dino Pambudi", "Teknik Kelistrikan"],
      ["7704221003","Ari Budiman", "Teknik Kelistrikan"],
      ["7704221004","Tia Ayu", "Teknik Kelistrikan"],
      ["7704221005","Vira Maharani", "Teknik Kelistrikan"],
    ]
});

const app = document.getElementById("app");
mahasiswa.render(app);
