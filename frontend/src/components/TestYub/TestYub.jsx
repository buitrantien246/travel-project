// import { Formik } from "formik";
// import * as Yup from "yup";

// const RegisterSchema = Yup.object().shape({
//   fullname: Yup.string()
//     .required("Vui lòng nhập họ tên")
//     .min(3, "Họ tên quá ngắn"),

//   email: Yup.string()
//     .email("Email không hợp lệ")
//     .required("Vui lòng nhập email"),

//   password: Yup.string()
//     .required("Vui lòng nhập mật khẩu")
//     .min(6, "Mật khẩu phải ít nhất 6 ký tự"),

//   confirmPassword: Yup.string()
//     .required("Vui lòng nhập lại mật khẩu")
//     .oneOf([Yup.ref("password"), null], "Mật khẩu không khớp"),
// });

// export default function TestYub() {
//   return (
//     <Formik
//       initialValues={{
//         fullname: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       }}
//       validationSchema={RegisterSchema}
//       validateOnChange={true} // 👈 Gõ là báo lỗi ngay
//       validateOnBlur={true}
//       onSubmit={(values, { setSubmitting }) => {
//         console.log("Submitted:", values);

//         setTimeout(() => {
//           setSubmitting(false);
//           alert("Đăng ký thành công!");
//         }, 800);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleSubmit,
//         isSubmitting,
//       }) => (
//         <form
//           onSubmit={handleSubmit}
//           style={{ display: "flex", flexDirection: "column", gap: 12 }}
//         >
//           {/* Họ tên */}
//           <input
//             type="text"
//             name="fullname"
//             placeholder="Họ và tên"
//             value={values.fullname}
//             onChange={handleChange}
//           />
//           {errors.fullname && touched.fullname && (
//             <span style={{ color: "red" }}>{errors.fullname}</span>
//           )}

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={values.email}
//             onChange={handleChange}
//           />
//           {errors.email && touched.email && (
//             <span style={{ color: "red" }}>{errors.email}</span>
//           )}

//           {/* Mật khẩu */}
//           <input
//             type="password"
//             name="password"
//             placeholder="Mật khẩu"
//             value={values.password}
//             onChange={handleChange}
//           />
//           {errors.password && touched.password && (
//             <span style={{ color: "red" }}>{errors.password}</span>
//           )}

//           {/* Xác nhận mật khẩu */}
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Nhập lại mật khẩu"
//             value={values.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && touched.confirmPassword && (
//             <span style={{ color: "red" }}>{errors.confirmPassword}</span>
//           )}

//           {/* Submit */}
//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
//           </button>
//         </form>
//       )}
//     </Formik>
//   );
// }


import React, { useState } from 'react';

// Dữ liệu mẫu cho các tab
const tabsData = [
  { label: 'Profile', content: 'Details about your account and activity.' },
  { label: 'Settings', content: 'Configure your user preferences.' },
  { label: 'Billing', content: 'Manage your payment methods and subscriptions.' },
];

const Tabs = () => {
  // State để theo dõi index của tab đang hoạt động (mặc định là tab đầu tiên: index 0)
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const getTabButtonClasses = (index) => {
    const baseClasses =
      'py-2 px-4 text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap'; // Thêm whitespace-nowrap để tránh tràn
    const activeClasses = 'text-indigo-600 border-b-2 border-indigo-600';
    const inactiveClasses =
      'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent';

    return `${baseClasses} ${
      index === activeTabIndex ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* ====================================================
        Phần Điều hướng Tab (Tab Navigation)
        ====================================================
      */}
      <div className="flex border-b border-gray-200" role="tablist">
        {tabsData.map((tab, index) => (
          <button
            key={tab.label}
            className={getTabButtonClasses(index)}
            onClick={() => setActiveTabIndex(index)}
            aria-selected={index === activeTabIndex}
            // Thiết lập role="tab" cho khả năng truy cập (accessibility)
            role="tab"
            // Thiết lập id và aria-controls cho khả năng truy cập
            id={`tab-${index}`}
            aria-controls={`panel-${index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ====================================================
        Phần Nội dung Tab (Tab Content)
        ====================================================
      */}
      <div
        className="mt-4 p-4 border border-t-0 border-gray-200 rounded-b-lg"
        // Thiết lập role="tabpanel" cho khả năng truy cập
        role="tabpanel"
        // Liên kết nội dung với tab đang hoạt động
        aria-labelledby={`tab-${activeTabIndex}`}
        id={`panel-${activeTabIndex}`}
        // Ẩn nội dung nếu không phải là tab đang hoạt động (mặc dù chỉ render 1 cái,
        // nhưng đây là một thuộc tính tốt cho khả năng truy cập)
        // Hidden chỉ là một lớp bảo vệ.
        hidden={false}
      >
        {/* Chỉ render nội dung cho tab đang hoạt động */}
        <p className="text-gray-700">{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
 