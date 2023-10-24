function printConfirmation() {
    const form = document.getElementById('tourForm');
    const name = form.querySelector('input[type="text"]').value;
    const address = form.querySelectorAll('input[type="text"]')[1].value;
    const phone = form.querySelector('input[type="tel"]').value;
    const tour = form.querySelector('select').value;
    const adults = parseInt(form.querySelector('input[name="adults"]').value);
    const children = parseInt(form.querySelector('input[name="children"]').value);
    const note = document.getElementById('ghiChu').value;

    const tourPrice = {
        "Hà Nội – Hạ Long – Tuần Châu": 10000000,
        "Hà Nội – Sapa ": 6000000,
        "Đà Nẵng – Hội An": 3000000,
        "Buôn Mê Thuộc – Kon Tum": 2000000,
        "TP.HCM – Nha Trang": 3500000,
        "TP.HCM – Cần Thơ – Cà Mau": 2500000
    };

    const totalAdultsPrice = adults * tourPrice[tour];
    const totalChildrenPrice = children * (tourPrice[tour] / 2);
    const totalPrice = totalAdultsPrice + totalChildrenPrice;

    const infoTable = `
        <h2>Thông tin đăng ký</h2>
        <p>Ngày đăng ký: ${new Date().toLocaleString()}</p>
        <p>Nhân viên: Họ tên nhân viên</p>
        <p>Họ tên khách: ${name}</p>
        <p>Địa chỉ: ${address}</p>
        <p>Tour: ${tour}</p>
        <p>Ghi chú: ${note}</p>
    `;

    const costTable = `
        <h2> Số lượng khách đoàn</h2>
        <table>
            <tr>
                <th  ></th>
                <th  >SL</th>
                <th>Đơn giá</th>
                <th>Thành Tiền</th>
            </tr>
            <tr>
                <td>Người lớn</td>
                <td>${adults}</td>
                <td>${tourPrice[tour]}</td>
                <td>${totalAdultsPrice}</td>
            </tr>
            <tr>
                <td>Trẻ em</td>
                <td>${children}</td>
                <td>${tourPrice[tour] / 2}</td>
                <td>${totalChildrenPrice}</td>
            </tr>
            <tr>
                <td colspan="2">Tổng tiền</td>
                <td>${totalPrice} đ</td>
            </tr>
        </table>
    `;

    const confirmationWindow = window.open('', 'Confirmation', 'width=800,height=400');
    confirmationWindow.document.open();
      // Thêm CSS trực tiếp vào cửa sổ pop-up
confirmationWindow.document.write(`
    <style>
        /* CSS cho bảng infoTable */
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #000;
            padding: 8px;
        }

        h2 {
            font-size: 18px;
        }

        p {
            font-size: 14px;
            margin: 0;
        }
    </style>
`);

// In nội dung của bảng infoTable
    confirmationWindow.document.write(infoTable);
    confirmationWindow.document.write(costTable);
    confirmationWindow.document.close();
}