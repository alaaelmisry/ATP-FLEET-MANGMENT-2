/******************************************
   ATP FLEET MANAGEMENT
******************************************/

//========================================
// إظهار اسم اليوم والتاريخ والوقت
//========================================

function updateDateTime() {

    const now = new Date();

    const days = [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
    ];

    document.getElementById("todayName").innerHTML =
        days[now.getDay()];

    document.getElementById("todayDate").innerHTML =
        now.toLocaleDateString("en-GB");

    document.getElementById("todayTime").innerHTML =
        now.toLocaleTimeString("en-GB");

}

setInterval(updateDateTime, 1000);
updateDateTime();


//========================================
// الانتقال بين الصفحات
//========================================

function hideAllPages() {

    document.getElementById("homePage").style.display = "none";
    document.getElementById("registerPage").style.display = "none";
    document.getElementById("viewPage").style.display = "none";

}

function showRegisterPage() {

    hideAllPages();
    document.getElementById("registerPage").style.display = "block";

}

function showViewPage() {

    hideAllPages();
    document.getElementById("viewPage").style.display = "block";

}

function goHome() {

    hideAllPages();
    document.getElementById("homePage").style.display = "block";

}


//========================================
// بيانات المركبات الافتراضية
//========================================

const vehicles = {

    A: ["A1", "A2", "A3"],
    B: ["B1", "B2", "B3"],
    C: ["C1", "C2", "C3"]

};


//========================================
// أسماء السائقين الافتراضية
//========================================

const drivers = {

    A1: "أحمد",
    A2: "محمد",
    A3: "خالد",

    B1: "علي",
    B2: "سعد",
    B3: "عبدالله",

    C1: "إبراهيم",
    C2: "سالم",
    C3: "ماجد"

};


//========================================
// تعبئة أرقام المركبات
//========================================

const vehicleType =
document.getElementById("vehicleType");

const vehicleNumber =
document.getElementById("vehicleNumber");


vehicleType.addEventListener("change", function () {

    vehicleNumber.innerHTML =
    '<option value="">اختر رقم المركبة</option>';

    const selectedType = this.value;

    if (!selectedType) return;

    vehicles[selectedType].forEach(function (number) {

        const option =
        document.createElement("option");

        option.value = number;
        option.textContent = number;

        vehicleNumber.appendChild(option);

    });

});


//========================================
// تعبئة اسم السائق
//========================================

vehicleNumber.addEventListener("change", function () {

    const number = this.value;

    document.getElementById("driverName").innerHTML =
    drivers[number] || "غير محدد";

});


//========================================
// إظهار خانة السائق الآخر
//========================================

document.getElementById("otherDriver")
.addEventListener("change", function () {

    document.getElementById("otherDriverCard")
    .style.display = "block";

});


document.getElementById("mainDriver")
.addEventListener("change", function () {

    document.getElementById("otherDriverCard")
    .style.display = "none";

});


//========================================
// إظهار سبب توقف المركبة
//========================================

document.getElementById("stopped")
.addEventListener("change", function () {

    document.getElementById("reasonCard")
    .style.display = "block";

});


document.getElementById("working")
.addEventListener("change", function () {

    document.getElementById("reasonCard")
    .style.display = "none";

});


//========================================
// تحديث حالة المركبة
//========================================

function updateVehicleStatus() {

    alert("تم تحديث حالة المركبة بنجاح.");

    // سيتم هنا لاحقاً إرسال البيانات
    // إلى Google Sheets

}


//========================================
// إرسال التقرير عبر الواتساب
//========================================

function sendWhatsAppReport() {

    const type =
    document.getElementById("vehicleType").value;

    const number =
    document.getElementById("vehicleNumber").value;

    const status =
    document.getElementById("working").checked ?
    "تعمل" : "متوقفة";


    let driver = "";

    if (
        document.getElementById("otherDriver").checked
    ) {

        driver =
        document.getElementById("otherDriverName").value;

    }

    else {

        driver =
        document.getElementById("driverName").innerHTML;

    }


    const reason =
    document.getElementById("stopReason").value;


    const now = new Date();

    const date =
    now.toLocaleDateString("en-GB");

    const time =
    now.toLocaleTimeString("en-GB");


    let message =

`ATP FLEET MANAGEMENT

شركة الراشد للتقنية والطاقة

نوع المركبة : ${type}

رقم المركبة : ${number}

اسم السائق : ${driver}

حالة المركبة : ${status}

سبب التوقف : ${reason}

التاريخ : ${date}

الوقت : ${time}`;




    const phone =
    "966509495516";


    const whatsappURL =

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    window.open(whatsappURL, "_blank");

}


//========================================
// فتح وإغلاق أقسام صفحة العرض
//========================================

function toggleSection(id) {

    const section =
    document.getElementById(id);

    if (section.style.display === "none") {

        section.style.display = "block";

    }

    else {

        section.style.display = "none";

    }

}


//========================================
// جلب البيانات من Google Sheets
//========================================

// سيتم إضافتها بعد إنشاء
// ملف Google Apps Script وربطه بالمشروع.



//========================================
// تحديث البيانات في Google Sheets
//========================================

// سيتم إضافتها في المرحلة القادمة.



//========================================
// إنشاء الجداول داخل صفحة العرض
//========================================

// سيتم إضافتها بعد الانتهاء
// من ربط Google Sheets.
