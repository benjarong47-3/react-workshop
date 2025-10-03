# React Workshop Starter 🚀

โปรเจกต์เริ่มต้น (Starter) สำหรับเวิร์กช็อป React ที่สร้างด้วย Vite เน้นความเร็วในการพัฒนาด้วย Hot Module Replacement (HMR) และมีโครงสร้างที่เรียบง่าย น้ำหนักเบา เหมาะสำหรับการเรียนรู้และทดลอง

---

## ✨ คุณสมบัติ (Features)

* **React + Vite:** เพลิดเพลินกับความเร็วในการแก้ไขและเห็นผลลัพธ์ทันที (Fast HMR)
* **โครงสร้างไฟล์เรียบง่าย:** มาพร้อม ESLint สำหรับการตรวจสอบคุณภาพโค้ด เริ่มต้นใช้งานได้ง่าย
* **พร้อมต่อยอด:** สามารถเพิ่มคอมโพเนนต์และสไตล์ใหม่ๆ ได้ทันที

---

## ⚡️ เริ่มต้นใช้งาน (Quick Start)

1.  **ติดตั้ง Dependencies:**
    ```bash
    npm install
    ```

2.  **รันในโหมดพัฒนา (Development Mode):**
    ```bash
    npm run dev
    ```

3.  **สร้างเวอร์ชันโปรดักชัน (Build for Production):**
    ```bash
    npm run build
    ```
    ไฟล์ผลลัพธ์จะถูกสร้างไว้ในโฟลเดอร์ `dist/`

4.  **พรีวิวเวอร์ชันโปรดักชัน (Preview Production Build):**
    ```bash
    npm run preview
    ```

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── TodoForm.jsx
│   ├── TodoItem.jsx
│   ├── TodoList.jsx
│   ├── assets
│   ├── containers
│   ├── contexts
│   ├── index.css
│   └── main.jsx
└── vite.config.js  

---

## 📝 หมายเหตุและการดีพลอย (Notes & Deployment)

* **Node.js:** แนะนำให้ใช้เวอร์ชัน **18+**
* **การเพิ่มคอมโพเนนต์:** สามารถสร้างไฟล์คอมโพเนนต์ใหม่ได้ในโฟลเดอร์ `src/` และเรียกใช้งานได้ตามต้องการ
* **การดีพลอย (Deployment):**
    * โปรเจกต์นี้พร้อมสำหรับการดีพลอยบนแพลตฟอร์มอย่าง **Vercel** หรือ **Netlify**
    * **Build Command:** `npm run build`
    * **Output Directory:** `dist`
