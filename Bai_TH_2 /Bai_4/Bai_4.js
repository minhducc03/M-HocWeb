// hiệu ứng chọn ghế
function toggleGhe(element) {
    const selected = element.getAttribute("data-selected");
    element.setAttribute("data-selected", selected === "true" ? "false" : "true");
    element.classList.toggle("selected");
}

function muaVe() {
    const ngayChieu = document.getElementById("ngayChieu").value;
    const phim = document.getElementById("phim").value;
    const suatChieu = document.getElementById("suatChieu").value;
    const phongChieu = document.getElementById("phongChieu").value;
    const gheElements = document.querySelectorAll(".ghe.selected");

    // Định nghĩa giá vé cho từng suất chiếu
    const giaSuatChieu = {
        "9h-12h": 45000,
        "13h-16h": 45000,
        "17h-20h": 55000,
        "22h-2h": 35000
    };

    // Định nghĩa giá vé cho từng phòng chiếu
    const giaPhongChieu = {
        "Đồng": 1.0,
        "Vàng": 1.5,
        "Bạc": 1.2,
        "Kim Cương": 2.0
    };

    const gheDaChon = [];
    let tongTien = 0;

    gheElements.forEach((element) => {
        const tenGhe = element.getAttribute("data-value");
        const [tenPhong] = tenGhe.split(' ');

        gheDaChon.push(tenGhe);
        tongTien += giaSuatChieu[suatChieu] * giaPhongChieu[phongChieu];
    });

    document.getElementById("khachHang").textContent = "Khách hàng: Nguyễn Văn A";
    document.getElementById("ngayChieuInfo").textContent = `Ngày chiếu: ${ngayChieu}`;
    document.getElementById("phimInfo").textContent = `Phim: ${phim}`;
    document.getElementById("suatChieuInfo").textContent = `Suất chiếu: ${suatChieu}`;
    document.getElementById("phongChieuInfo").textContent = `Phòng chiếu: ${phongChieu}`;

    const gheInfoList = document.getElementById("gheInfo");
    gheInfoList.innerHTML = "";
    gheDaChon.forEach((g) => {
        const [tenGhe, tenPhong] = g.split(' ');
        const gia = giaSuatChieu[suatChieu] * giaPhongChieu[phongChieu];
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        cell1.textContent = tenGhe;
        cell2.textContent = gia.toLocaleString('vi-VN') + ' đ';
        row.appendChild(cell1);
        row.appendChild(cell2);
        gheInfoList.appendChild(row);
    });

    document.getElementById("tongTienInfo").textContent = `Tổng tiền: ${tongTien.toLocaleString('vi-VN')} đồng`;

    document.getElementById("thongTinVe").style.display = "block";
}

const gheElements = document.querySelectorAll(".ghe");
gheElements.forEach((element) => {
    element.addEventListener("click", () => toggleGhe(element));
});