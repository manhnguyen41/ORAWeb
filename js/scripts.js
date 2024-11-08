const section = [
  {
    menuTop: "Trang chủ",
    menuLeft: [
      {
        menuLeft: "Thông tin khai giảng",
        contentsLayout: [
          {
            content: "Thông tin khai giảng",
            startRow: 1,
            endRow: 20,
            startCol: 1,
            endCol: 16,
            contentInside: `<div class="section-header">Thông tin khai giảng</div>
            <table class="table-info">
              <tr>
                <th>Thứ</th>
                <td>Thứ 6</td>
              </tr>
              <tr>
                <th>Thời gian/Tiết</th>
                <td>Từ 3 đến 6</td>
              </tr>
              <tr>
                <th>Ngày/Tuần</th>
                <td>2-9,11-18</td>
              </tr>
              <tr>
                <th>Tại địa điểm</th>
                <td>D9-501</td>
              </tr>
            </table>
          </div>`,
          },
        ],
      },
      {
        menuLeft: "Thông tin seminar",
        contentsLayout: [
          {
            content: "Thông tin seminar",
            startRow: 1,
            endRow: 20,
            startCol: 1,
            endCol: 16,
            contentInside: `<div id="seminar">
            <div class="section-header" style="margin-top: 20px">
              Thông tin seminar
            </div>
            <table class="table-info">
              <tr>
                <th>Mã lớp</th>
                <td>151900</td>
              </tr>
              <tr>
                <th>Loại hình</th>
                <td>LT+BT</td>
              </tr>
              <tr>
                <th>Hệ</th>
                <td>HEDSPI</td>
              </tr>
              <tr>
                <th>GVHD</th>
                <td>Phạm Huy Hoàng</td>
              </tr>
              <tr>
                <th>Số lần vắng</th>
                <td>0</td>
              </tr>
              <tr>
                <th>Số sinh viên</th>
                <td>150</td>
              </tr>
              <tr>
                <th>Hình thức GD</th>
                <td>Offline</td>
              </tr>
            </table>
          </div>`,
          },
        ],
      },
      {
        menuLeft: "Thông tin công ty quan tâm",
        contentsLayout: [
          {
            content: "Thông tin công ty quan tâm",
            startRow: 1,
            endRow: 20,
            startCol: 1,
            endCol: 10,
            contentInside: `<div id="company">
            <div class="section-header" style="margin-top: 20px">
              Thông tin công ty quan tâm
            </div>
            <div style="display: flex; justify-content: space-between">
              <!-- Nội dung bên trái -->
              <div style="flex: 2; margin-right: 30px">
                <ul>
                  <li><strong>Công ty:</strong> FPT Software</li>
                </ul>
                <p>
                  FPT Software là tên gọi khác của công ty TNHH Phần Mềm FPT với
                  nhiệm vụ chính là gia công phần mềm tại Việt Nam và nước
                  ngoài. Thành lập từ năm 1988 đến nay với 3 Trụ sở chính FPT
                  Software đặt tại Việt Nam và một số nước trên toàn thế giới
                  như Hoa Kỳ, Nhật Bản, Malaysia, Đức, Úc, Singapore, Malaysia,
                  Thái Lan và Philipines hiện FPT Software đáp ứng nhu cầu gia
                  công phần mềm lớn cho hơn 150 công ty hàng đầu tại 20 quốc gia
                  lớn nhất trên thế giới hiện nay với các hợp đồng lớn có khi
                  đạt cả 1 triệu USD dành cho một số đối tác lớn như Hitachi,
                  NEOPOST, Petronas, Deutsche Bank, và Unilever với hơn 4000
                  nhân viên trên toàn thế giới.
                </p>

                <p>
                  FPT Software theo đuổi mục tiêu gia công phần mềm để đáp ứng
                  cho nhu cầu phát triển CNTT của các hãng phần mềm trong nước,
                  các công ty lớn trong nước và tham vọng hơn là xuất khẩu phần
                  mềm trên toàn thế giới cho các công ty nước ngoài biết đến tập
                  đoàn FPT, mục đích chính là vươn đến tầm cao mới thông qua
                  công nghệ nhằm nâng cao năng suất lao động.
                </p>

                <p>
                  Kinh doanh của FPT Software xuất phát từ Công nghệ thông tin
                  và Viễn Thông FPT là cốt lõi để đáp ứng cho khách hàng trên 63
                  tỉnh thành trên toàn lãnh thổ Việt Nam và mở rộng đến khách
                  hàng toàn cầu. Từ khi được thành lập cho đến nay, FPT Software
                  đã là công ty phần mềm số 1 tại Việt Nam trong lĩnh vực tích
                  hợp hệ thống, phân phối và bán lẻ, dịch vụ Công Nghệ Thông
                  tin, xuất khẩu gia công phần mềm, bán lẻ sản phẩm CNTT. Ở lĩnh
                  vực Viễn Thông FPT là một trong 3 nhà cung cấp dịch vụ
                  internet cáp quang FPT hàng đầu tại Việt Nam. Về lĩnh vực
                  quảng cáo, FPT là đơn vị quảng cáo trực tuyến số 1 tại Việt
                  Nam với trang báo điện tử VNexpress với hơn 42 triệu lượt truy
                  cập mỗi ngày.
                </p>
              </div>
            </div>
          </div>`,
          },
          {
            content: "Quảng cáo",
            startRow: 1,
            endRow: 20,
            startCol: 10,
            endCol: 16,
            contentInside: `<!-- Quảng cáo bên phải -->
              <a
                href="https://fptsoftware.com/"
                target="_blank"
                style="flex: 1; margin-top: 20px"
              >
                <div class="FRB" style="width: 100%">
                  <img
                    class="DRB"
                    src="http://itde.hvnh.edu.vn/public/img/news/files/FPT%20tuy%E1%BB%83n%20d%E1%BB%A5ng%20(2).jpg"
                    style="width: 100%"
                  />
                  <div class="ERB" style="width: 100%; color: blue" title="">
                    FPT SOFTWARE TUYỂN DỤNG
                  </div>
                </div>
              </a>`,
          },
        ],
      },
    ],
  },
  {
    menuTop: "Thông tin môn học",
    menuLeft: [
      {
        menuLeft: "Mô tả tóm tắt học phần (tiếng Việt) (*)",
        contentsLayout: [
          {
            content: "Nội dung học phần",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "Mô tả tóm tắt học phần (tiếng Anh) (*)",
        contentsLayout: [
          {
            content: "Course description",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "Nội dung tóm tắt học phần (tiếng Việt) (*)",
        contentsLayout: [
          {
            content: "Chi tiết học phần",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "Nội dung tóm tắt học phần (tiếng Anh) (*)",
        contentsLayout: [
          {
            content: "Detailed course content",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "Sách tham khảo",
        contentsLayout: [
          {
            content: "Danh sách sách",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
    ],
  },
  {
    menuTop: "Các công nghệ web",
    menuLeft: [
      {
        menuLeft: "Frontend (Giao diện người dùng)",
        contentsLayout: [
          {
            content: "Frameworks và Libraries",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "Backend (Máy chủ và xử lý dữ liệu)",
        contentsLayout: [
          {
            content: "Ngôn ngữ và Frameworks",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "Cơ sở dữ liệu",
        contentsLayout: [
          {
            content: "Hệ quản trị CSDL",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "API và Tích hợp dịch vụ",
        contentsLayout: [
          {
            content: "Các dịch vụ và API",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "DevOps và Triển khai",
        contentsLayout: [
          {
            content: "Các công cụ DevOps",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "Bảo mật",
        contentsLayout: [
          {
            content: "Kỹ thuật bảo mật",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "Testing và Debugging",
        contentsLayout: [
          {
            content: "Phương pháp kiểm thử",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "Performance Optimization",
        contentsLayout: [
          {
            content: "Kỹ thuật tối ưu",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
      {
        menuLeft: "User Authentication & Authorization",
        contentsLayout: [
          {
            content: "Phương pháp xác thực",
            startRow: 1,
            endRow: 2,
            startCol: 12,
            endCol: 13,
            contentInside: "",
          },
        ],
      },
    ],
  },
  {
    menuTop: "Thông tin sinh viên",
    menuLeft: [
      {
        menuLeft: "Curriculum vitae (CV)",
        contentsLayout: [
          {
            content: "Họ tên",
            startRow: 1,
            endRow: 2,
            startCol: 1,
            endCol: 10,
            contentInside: "Nguyễn Xuân Mạnh",
          },
          {
            content: "MSSV",
            startRow: 2,
            endRow: 4,
            startCol: 1,
            endCol: 10,
            contentInside: "20215281",
          },
          {
            content: "Ảnh",
            startRow: 1,
            endRow: 4,
            startCol: 10,
            endCol: 16,
            contentInside: `<img class="img-avatar" src="avatar.jpg" alt="">`,
          },
        ],
      },
      {
        menuLeft: "Các dự án đã tham gia",
        contentsLayout: [
          {
            content: "Bot chơi cờ vua",
            startRow: 1,
            endRow: 4,
            startCol: 1,
            endCol: 8,
            contentInside: "1 con bot chơi cờ vua",
          },
          {
            content: "Bot chơi cờ tướng",
            startRow: 1,
            endRow: 4,
            startCol: 8,
            endCol: 16,
            contentInside: "1 con bot chơi cờ tướng",
          },
        ],
      },
      {
        menuLeft: "Hoạt động cộng đồng",
        contentsLayout: [
          {
            content: "Nét chữ trao em",
            startRow: 1,
            endRow: 4,
            startCol: 1,
            endCol: 8,
            contentInside: "Dạy học cho các em bé có hoàn cảnh khó khăn",
          },
          {
            content: "Mùa hè xanh",
            startRow: 1,
            endRow: 4,
            startCol: 8,
            endCol: 16,
            contentInside: "Tình nguyện mùa hè xanh",
          },
        ],
      },
    ],
  },
];

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = "block";
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}
// Function to show content and update button style
function showContent(menuName, menuLeftIndex = 0) {
  // Hide all sections
  const sections = document.querySelectorAll(".w3-container");
  sections.forEach((section) => section.classList.add("hidden"));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(".w3-bar-item");
  buttons.forEach((button) => button.classList.remove("active"));

  if (menuName == "admin-page") {
    document.getElementById("content").classList.add('hidden')
    document.getElementById("admin-page").classList.remove("hidden");
    const menuTopItems = section.map((item) => item.menuTop);
    showAdminTable(menuTopItems);
  } else {
    // Show selected section
    // document.getElementById(menuName).classList.remove("hidden");
    document.getElementById("content").classList.remove("hidden");
    const headerPreviewLayout = document.getElementById("header-layout");

    const sidebar = document.getElementById("mySidebar");
    sidebar.innerHTML = "";
    const menu = section.find((item) => item.menuTop === menuName);
    const menuLeft = menu.menuLeft.map((item) =>
      typeof item === "object" ? item.menuLeft : item
    );
    sidebar.innerHTML = `<h4 class="w3-bar-item"><b>${menuName}</b></h4>`;
    menuLeft.forEach((item, index) => {
      sidebar.innerHTML += `
        <a onclick = 'showContent("${menuName}", ${index})' class="w3-bar-item w3-button w3-hover-black" href="#${item
        .replace(/\s+/g, "")
        .toLowerCase()}" menu-left-name="${item}">
          ${item}
        </a>
      `;
    });

    const gridContent = document.getElementById("grid-content");
    gridContent.innerHTML = "";
    const contentsLayout = menu.menuLeft[menuLeftIndex].contentsLayout;
    contentsLayout.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("content-box-without-border");
      div.style.gridRow = `${item.startRow} / ${item.endRow}`;
      div.style.gridColumn = `${item.startCol} / ${item.endCol}`;
      div.innerHTML = item.contentInside;

      gridContent.appendChild(div);
    });

    headerPreviewLayout.textContent = menu.menuLeft[menuLeftIndex].menuLeft;
    // Add active class to clicked button
    event.target.classList.add("active");
  }
}

window.onload = function () {
  showContent("Trang chủ");
};

function generateRandomString(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

function insertAfter(newNode, referenceNode) {
  if (referenceNode.nextSibling) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  } else {
    referenceNode.parentNode.appendChild(newNode);
  }
}

function showAdminTable(menuItems) {
  document.getElementById("grid-content").classList.add("hidden");
  const adminPage = document.getElementById("admin-page");

  const table = document.createElement("table");
  table.classList.add("admin-table");

  menuItems.forEach((menu, index) => {
    const row = document.createElement("tr");
    row.classList.add(
      index === menuItems.length - 1 ? "admin-last-row" : "admin-row"
    );

    const nameCell = document.createElement("td");
    nameCell.classList.add("admin-head-cell");
    nameCell.textContent = menu;
    row.appendChild(nameCell);

    const viewCell = document.createElement("td");
    viewCell.classList.add("admin-cell");
    viewCell.innerHTML = '<i class="fa-solid fa-eye"></i>';
    viewCell.setAttribute("onclick", `showAdminMenuLeft('${menu}')`);
    row.appendChild(viewCell);

    const editCell = document.createElement("td");
    editCell.classList.add("admin-cell");
    if (menu !== "Trang chủ") {
      editCell.innerHTML = '<i class="fas fa-edit"></i>';
      editCell.setAttribute("onclick", `editMenuName('${menu}')`);
    }
    row.appendChild(editCell);

    const removeCell = document.createElement("td");
    removeCell.classList.add("admin-cell");
    if (menu !== "Trang chủ") {
      removeCell.innerHTML = '<i class="fa-solid fa-x"></i>';
      removeCell.setAttribute("onclick", `removeMenuTop('${menu}')`);
    }
    row.appendChild(removeCell);

    const addCell = document.createElement("td");
    addCell.classList.add("admin-cell");
    addCell.innerHTML = '<i class="fa fa-plus"></i>';
    addCell.setAttribute("onclick", `addMenuTop('${menu}')`);
    row.appendChild(addCell);

    table.appendChild(row);
  });

  adminPage.innerHTML = "Admin menu top: Chỉnh sửa menu top";
  adminPage.appendChild(table);
}

function addMenuTop(chosenMenuName) {
  var menuName = generateRandomString();
  const newMenuItem = document.createElement("a");
  newMenuItem.classList.add("w3-bar-item", "w3-button");
  newMenuItem.textContent = menuName;
  newMenuItem.setAttribute("menu-name", menuName);
  newMenuItem.href = "javascript:void(0)";
  newMenuItem.onclick = function () {
    showContent(menuName);
  };
  const navbarItems = document.querySelectorAll(".w3-bar .w3-bar-item");

  navbarItems.forEach((item) => {
    if (item.getAttribute("menu-name") === chosenMenuName) {
      insertAfter(newMenuItem, item);
    }
  });

  const index = section.findIndex((item) => item.menuTop === chosenMenuName);
  if (index !== -1) {
    section.splice(index + 1, 0, {
      menuTop: menuName,
      menuLeft: [],
    });
  }
  const menuTopItems = section.map((item) => item.menuTop);
  showAdminTable(menuTopItems);
}

function removeMenuTop(chosenMenuName) {
  const navbarItems = document.querySelectorAll(".w3-bar .w3-bar-item");
  navbarItems.forEach((item) => {
    if (item.getAttribute("menu-name") === chosenMenuName) {
      item.remove();
    }
  });

  const index = section.findIndex((item) => item.menuTop === chosenMenuName);
  if (index !== -1) {
    section.splice(index, 1);
  }

  const menuTopItems = section.map((item) => item.menuTop);
  showAdminTable(menuTopItems);
}

function editMenuName(menuName) {
  const clickedCell = event.target.closest("td");
  const clickedRow = clickedCell.closest("tr");
  const menuHeadCell = clickedRow.querySelector(".admin-head-cell");

  if (menuHeadCell) {
    const currentName = menuHeadCell.textContent.trim();
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentName;
    menuHeadCell.innerHTML = "";
    menuHeadCell.appendChild(input);

    input.addEventListener("blur", () =>
      saveMenuName(input, menuHeadCell, menuName)
    );
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        saveMenuName(input, menuHeadCell, menuName);
      }
    });
  }
}

function saveMenuName(input, menuHeadCell, oldMenuName) {
  console.log(menuHeadCell);
  console.log(oldMenuName);

  const newName = input.value.trim();
  console.log(newName);

  if (newName) {
    menuHeadCell.textContent = newName;

    const navbarItems = document.querySelectorAll(".w3-bar .w3-bar-item");
    navbarItems.forEach((item) => {
      if (item.getAttribute("menu-name") === oldMenuName) {
        item.textContent = newName;
        item.setAttribute("menu-name", newName);
      }
    });
  }

  const index = section.findIndex((item) => item.menuTop === oldMenuName);
  if (index !== -1) {
    section[index].menuTop = newName;
  }
  const menuTopItems = section.map((item) => item.menuTop);
  showAdminTable(menuTopItems);
}

function showAdminMenuLeft(menuName) {
  document.getElementById("admin-page").classList.add("hidden");
  document.getElementById("admin-menu-left").classList.remove("hidden");

  const sidebar = document.getElementById("mySidebar");
  sidebar.innerHTML = "";
  const menu = section.find((item) => item.menuTop === menuName);
  const menuLeft = menu.menuLeft.map((item) =>
    typeof item === "object" ? item.menuLeft : item
  );
  sidebar.innerHTML = `<h4 class="w3-bar-item"><b>${menuName}</b></h4>`;
  menuLeft.forEach((item) => {
    sidebar.innerHTML += `
        <a class="w3-bar-item w3-button w3-hover-black" href="#${item
          .replace(/\s+/g, "")
          .toLowerCase()}" menu-left-name="${item}">
          ${item}
        </a>
      `;
  });
  showAdminMenuLeftContent(menuLeft, menuName);
}

function showAdminMenuLeftContent(rows, menuName) {
  const headerDiv = document.getElementsByClassName("header-text")[0];
  if (menuName == "Thông tin sinh viên") {
    headerDiv.innerHTML = `<tr>
          <td>Admin menu left: "${menuName}"</td>
          <td class="admin-cell" onclick="addMenuLeft('${menuName}', 'none')">
            <i class="fa fa-plus"></i>
          </td>
          <td class="admin-cell" onclick="reset()">
      <i class="fa fa-refresh"></i>
    </td>
        </tr>`;
  } else {
    headerDiv.innerHTML = `<tr>
          <td>Admin menu left: "${menuName}"</td>
          <td class="admin-cell" onclick="addMenuLeft('${menuName}', 'none')">
            <i class="fa fa-plus"></i>
          </td>
        </tr>`;
  }

  const table = document.getElementsByClassName("admin-table")[1];
  table.innerHTML = "";
  
  rows.forEach((row) => {
    const newRow = document.createElement("tr");
    if (row === rows[rows.length - 1]) {
      newRow.classList.add("admin-last-row");
    } else {
      newRow.classList.add("admin-row");
    }
    const cells = [
      { content: row, class: "admin-head-cell" },
      {
        content: '<i class="fa-solid fa-eye"></i>',
        class: "admin-cell",
        onclick: () => showAdminContentsLayout(menuName, row),
      },
      {
        content: '<i class="fas fa-edit"></i>',
        class: "admin-cell",
        onclick: () => editMenuLeftName(menuName, row),
      },
      {
        content: '<i class="fa-solid fa-x"></i>',
        class: "admin-cell",
        onclick: () => removeMenuLeft(menuName, row),
      },
      {
        content: '<i class="fa fa-plus"></i>',
        class: "admin-cell",
        onclick: () => addMenuLeft(menuName, row),
      },
    ];

    cells.forEach((cellData) => {
      const cell = document.createElement("td");
      cell.classList.add(cellData.class);
      cell.innerHTML = cellData.content;
      if (cellData.onclick) {
        cell.onclick = cellData.onclick;
      }
      newRow.appendChild(cell);
    });

    table.appendChild(newRow);
  });
}

function addMenuLeft(menuTop, chosenMenuLeft) {
  const menuLeftName = generateRandomString();
  const menu = section.find((item) => item.menuTop === menuTop);
  if (chosenMenuLeft === "none")
    menu.menuLeft.unshift({ menuLeft: menuLeftName, contentsLayout: [] });
  else {
    const index = menu.menuLeft.findIndex((item) =>
      typeof item === "object"
        ? item.menuLeft === chosenMenuLeft
        : item === chosenMenuLeft
    );
    menu.menuLeft.splice(index + 1, 0, {
      menuLeft: menuLeftName,
      contentsLayout: [],
    });
  }
  showAdminMenuLeft(menuTop);
}

function removeMenuLeft(menuTop, chosenMenuLeft) {
  const menu = section.find((item) => item.menuTop === menuTop);
  const index = menu.menuLeft.findIndex((item) =>
    typeof item === "object"
      ? item.menuLeft === chosenMenuLeft
      : item === chosenMenuLeft
  );
  menu.menuLeft.splice(index, 1);
  showAdminMenuLeft(menuTop);
}

function editMenuLeftName(menuTop, chosenMenuLeft) {
  const clickedCell = event.target.closest("td");
  const clickedRow = clickedCell.closest("tr");
  const menuHeadCell = clickedRow.querySelector(".admin-head-cell");
  
  if (menuHeadCell) {
    const currentName = menuHeadCell.textContent.trim();
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentName;
    menuHeadCell.innerHTML = "";
    console.log(section);

    menuHeadCell.appendChild(input);
    
    input.addEventListener("blur", () =>
      saveMenuLeftName(input, menuTop, chosenMenuLeft)
    );
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        saveMenuLeftName(input, menuTop, chosenMenuLeft);
      }
    });
  }
}

function saveMenuLeftName(input, menuTop, chosenMenuLeft) {
  const newName = input.value.trim();
  const menu = section.find((item) => item.menuTop === menuTop);
  const index = menu.menuLeft.findIndex((item) =>
    item.menuLeft
  );
  
 
  menu.menuLeft[index].menuLeft = newName;
  showAdminMenuLeft(menuTop);
}

function showAdminContentsLayout(menuTop, menuLeft) {
  document.getElementById("editText").classList = "hidden";
  document.getElementById("admin-menu-left").classList.add("hidden");
  document.getElementById("admin-contents-layout").classList.remove("hidden");
  document.getElementById("preview-layout").classList.remove("hidden");

  const headerDiv = document.getElementById("header-admin-contents-layout");

  headerDiv.innerHTML = `<tr>
          <td>Admin contents layout: "${menuTop} / ${menuLeft}"</td>
          <td class="admin-cell" onclick="addContentLayout('${menuTop}', '${menuLeft}', 'none')">
            <i class="fa fa-plus"></i>
          </td>
        </tr>`;

  const table = document.getElementById("table-admin-contents-layout");
  table.innerHTML = "";

  const contents = getContentsByMenuTopAndMenuLeft(menuTop, menuLeft);

  contents.forEach((content) => {
    const newRow = document.createElement("tr");
    if (content === contents[contents.length - 1]) {
      newRow.classList.add("admin-last-row");
    } else {
      newRow.classList.add("admin-row");
    }
    const cells = [
      { content: content, class: "admin-head-cell" },
      {
        content: '<i class="fa-solid fa-eye"></i>',
        class: "admin-cell",
        onclick: () => showAdminContents(menuTop, menuLeft, content),
      },
      {
        content: '<i class="fas fa-edit"></i>',
        class: "admin-cell",
        onclick: () => editContentLayout(menuTop, menuLeft, content),
      },
      {
        content: '<i class="fa-solid fa-x"></i>',
        class: "admin-cell",
        onclick: () => removeContentLayout(menuTop, menuLeft, content),
      },
      {
        content: '<i class="fa fa-plus"></i>',
        class: "admin-cell",
        onclick: () => addContentLayout(menuTop, menuLeft, content),
      },
    ];

    cells.forEach((cellData) => {
      const cell = document.createElement("td");
      cell.classList.add(cellData.class);
      cell.innerHTML = cellData.content;
      if (cellData.onclick) {
        cell.onclick = cellData.onclick;
      }
      newRow.appendChild(cell);
    });

    table.appendChild(newRow);
  });
  showPreviewLayout(menuTop, menuLeft, true);
}

function getContentsByMenuTopAndMenuLeft(menuTop, menuLeft) {
  const menu = section.find((item) => item.menuTop === menuTop);
  const menuLeftItem = menu.menuLeft.find((item) =>
    typeof item === "object" ? item.menuLeft === menuLeft : item === menuLeft
  );
  return menuLeftItem.contentsLayout.map((item) => item.content);
}

function showPreviewLayout(menuTop, menuLeft, forLayout) {
  const headerPreviewLayout = document.getElementById("header-preview-layout");
  headerPreviewLayout.textContent = menuLeft;

  if (forLayout) {
    document.querySelector("#preview-layout > a").classList = "";
  } else {
    document.querySelector("#preview-layout > a").classList = "hidden";
  }

  const gridContainer = document.getElementById("grid-container");
  gridContainer.innerHTML = "";
  const menu = section.find((item) => item.menuTop === menuTop);
  const contentsLayout = menu.menuLeft.find(
    (left) => left.menuLeft === menuLeft
  ).contentsLayout;
  contentsLayout.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("content-box");
    div.style.gridRow = `${item.startRow} / ${item.endRow}`;
    div.style.gridColumn = `${item.startCol} / ${item.endCol}`;
    div.innerHTML = forLayout ? item.content : item.contentInside;

    gridContainer.appendChild(div);
  });

  fillEmptyGridCells();
}

function addContentLayout(menuTop, menuLeft, chosenContentLayout) {
  const contentName = generateRandomString();
  const menu = section.find((item) => item.menuTop === menuTop);
  const selectedMenuLeft = menu.menuLeft.find((item) =>
    typeof item === "object" ? item.menuLeft === menuLeft : item === menuLeft
  );

  const newContentLayout = {
    content: contentName,
    startRow: 1,
    endRow: 2,
    startCol: 1,
    endCol: 2,
    contentInside: "",
  };

  if (chosenContentLayout === "none") {
    selectedMenuLeft.contentsLayout.unshift(newContentLayout);
  } else {
    const index = selectedMenuLeft.contentsLayout.findIndex(
      (layout) => layout.content === chosenContentLayout
    );
    selectedMenuLeft.contentsLayout.splice(index + 1, 0, newContentLayout);
  }

  showAdminContentsLayout(menuTop, menuLeft);
  showPreviewLayout(menuTop, menuLeft, true);
}

function removeContentLayout(menuTop, menuLeft, chosenContentLayout) {
  const menu = section.find((item) => item.menuTop === menuTop);
  const selectedMenuLeft = menu.menuLeft.find((item) =>
    typeof item === "object" ? item.menuLeft === menuLeft : item === menuLeft
  );
  const index = selectedMenuLeft.contentsLayout.findIndex(
    (layout) => layout.content === chosenContentLayout
  );
  selectedMenuLeft.contentsLayout.splice(index, 1);
  showAdminContentsLayout(menuTop, menuLeft);
  showPreviewLayout(menuTop, menuLeft, true);
}

function editContentLayout(menuTop, menuLeft, chosenContentLayout) {
  const editContainer = document.querySelector(".edit");
  editContainer.classList.remove("hidden");

  const menu = section.find((item) => item.menuTop === menuTop);
  const selectedMenuLeft = menu.menuLeft.find((item) =>
    typeof item === "object" ? item.menuLeft === menuLeft : item === menuLeft
  );
  const contentLayout = selectedMenuLeft.contentsLayout.find(
    (layout) => layout.content === chosenContentLayout
  );

  editContainer.innerHTML = `
    <b>Chỉnh sửa thông tin mục nội dung</b><p>
    <label>Mục nội dung: </label>
    <label name="contents-item-attribute">${contentLayout.content}</label><br/>
  
    <div class="form-row">
      <label>Tên: </label>
      <input type="text" name="contents-item-attribute" class="input-field" value="${contentLayout.content}" />
    </div>
  
    <div class="form-row">
      <label>Start row: </label>
      <input type="text" name="contents-item-attribute" class="input-field" value="${contentLayout.startRow}" />
      <label>End row: </label>
      <input type="text" name="contents-item-attribute" class="input-field" value="${contentLayout.endRow}" />
    </div>
  
    <div class="form-row">
      <label>Start column: </label>
      <input type="text" name="contents-item-attribute" class="input-field" value="${contentLayout.startCol}" />
      <label>End column: </label>
      <input type="text" name="contents-item-attribute" class="input-field" value="${contentLayout.endCol}" />
    </div>
  
    <button id="ok">OK</button>
    <button id="cancel" onclick="document.querySelector('.edit').classList.add('hidden')">Cancel</button>
  `;

  document.getElementById("ok").onclick = function () {
    const inputs = editContainer.querySelectorAll(".input-field");
    contentLayout.content = inputs[0].value;
    contentLayout.startRow = parseInt(inputs[1].value);
    contentLayout.endRow = parseInt(inputs[2].value);
    contentLayout.startCol = parseInt(inputs[3].value);
    contentLayout.endCol = parseInt(inputs[4].value);
    if (
      !contentLayout.content ||
      !contentLayout.startRow ||
      !contentLayout.endRow ||
      !contentLayout.startCol ||
      !contentLayout.endCol
    ) {
      alert("Không được để trống");
    } else {
      editContainer.classList.add("hidden");
      showAdminContentsLayout(menuTop, menuLeft);
      showPreviewLayout(menuTop, menuLeft, true);
    }
  };
}

function fillEmptyGridCells() {
  const gridContainer = document.getElementById("grid-container");
  const gridItems = gridContainer.querySelectorAll(".content-box");

  const numColumns = 15;
  const numRows = 20;

  const gridMap = Array.from({ length: numRows }, () =>
    Array(numColumns).fill(false)
  );
  gridItems.forEach((item) => {
    const startRow = parseInt(item.style.gridRowStart || 1) - 1;
    const endRow = parseInt(item.style.gridRowEnd || startRow + 1) - 1;
    const startCol = parseInt(item.style.gridColumnStart || 1) - 1;
    const endCol = parseInt(item.style.gridColumnEnd || startCol + 1) - 1;

    for (let row = startRow; row <= endRow - 1; row++) {
      for (let col = startCol; col <= endCol - 1; col++) {
        gridMap[row][col] = true;
      }
    }
  });

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numColumns; col++) {
      if (!gridMap[row][col]) {
        const placeholder = document.createElement("div");
        placeholder.classList.add("placeholder");
        placeholder.style.gridRow = `${row + 1} / ${row + 2}`;
        placeholder.style.gridColumn = `${col + 1} / ${col + 2}`;
        gridContainer.appendChild(placeholder);
      }
    }
  }
}

function showAdminContents(menuTop, menuLeft, chosenContentLayout) {
  document.getElementById("editText").classList = "";
  document.getElementById("admin-contents-layout").classList.add("hidden");
  document.getElementById("admin-contents").classList.remove("hidden");
  document.getElementById("admin-contents").setAttribute("menuTop", menuTop);
  document.getElementById("admin-contents").setAttribute("menuLeft", menuLeft);
  document
    .getElementById("admin-contents")
    .setAttribute("chosenContentLayout", chosenContentLayout);
  document.getElementById("editor").textContent = getContent(
    menuTop,
    menuLeft,
    chosenContentLayout
  );
  showPreviewLayout(menuTop, menuLeft, false);
}

function getContent(menuTop, menuLeft, chosenContentLayout) {
  const menu = section.find((item) => item.menuTop === menuTop);
  const selectedMenuLeft = menu.menuLeft.find((item) =>
    typeof item === "object" ? item.menuLeft === menuLeft : item === menuLeft
  );
  const contentLayout = selectedMenuLeft.contentsLayout.find(
    (layout) => layout.content === chosenContentLayout
  );
  return contentLayout.contentInside == ""
    ? contentLayout.content
    : contentLayout.contentInside;
}

function saveContent(menuTop, menuLeft, chosenContentLayout, innerHTML) {
  const menu = section.find((item) => item.menuTop === menuTop);
  const selectedMenuLeft = menu.menuLeft.find((item) =>
    typeof item === "object" ? item.menuLeft === menuLeft : item === menuLeft
  );
  const contentLayout = selectedMenuLeft.contentsLayout.find(
    (layout) => layout.content === chosenContentLayout
  );
  innerHTML = innerHTML.slice(3, -4);
  contentLayout.contentInside = innerHTML;
  showPreviewLayout(menuTop, menuLeft, false);
}

function reset() {
  const menu = section.find((item) => item.menuTop === "Thông tin sinh viên");
  menu.menuLeft = [
    {
      menuLeft: "Curriculum vitae (CV)",
      contentsLayout: [
        {
          content: "Họ tên",
          startRow: 1,
          endRow: 2,
          startCol: 1,
          endCol: 10,
          contentInside: "Nguyễn Xuân Mạnh",
        },
        {
          content: "MSSV",
          startRow: 2,
          endRow: 4,
          startCol: 1,
          endCol: 10,
          contentInside: "20215281",
        },
        {
          content: "Ảnh",
          startRow: 1,
          endRow: 4,
          startCol: 10,
          endCol: 16,
          contentInside: `<img class="img-avatar" src="avatar.jpg" alt="">`,
        },
      ],
    },
    {
      menuLeft: "Các dự án đã tham gia",
      contentsLayout: [
        {
          content: "Bot chơi cờ vua",
          startRow: 1,
          endRow: 4,
          startCol: 1,
          endCol: 8,
          contentInside: "1 con bot chơi cờ vua",
        },
        {
          content: "Bot chơi cờ tướng",
          startRow: 1,
          endRow: 4,
          startCol: 8,
          endCol: 16,
          contentInside: "1 con bot chơi cờ tướng",
        },
      ],
    },
    {
      menuLeft: "Hoạt động cộng đồng",
      contentsLayout: [
        {
          content: "Nét chữ trao em",
          startRow: 1,
          endRow: 4,
          startCol: 1,
          endCol: 8,
          contentInside: "Dạy học cho các em bé có hoàn cảnh khó khăn",
        },
        {
          content: "Mùa hè xanh",
          startRow: 1,
          endRow: 4,
          startCol: 8,
          endCol: 16,
          contentInside: "Tình nguyện mùa hè xanh",
        },
      ],
    },
  ];
  showAdminMenuLeft("Thông tin sinh viên");
}
