function App() {
  return (
    <>
      {/* 1. function
        Khi cập nhật state
        setState
        2. Class
        Khi cập nhật state
        this.setState
        khi cập nhật state đối với function và class có khác nhau gì không?
        - Đối với function thì khi setState: replace (thay thế)
        - Đối với class thì setState: merge (gộp)
        *****************
        props không thể được thay đổi ở component con
        *****************
        state là dùng để lưu thông tin, dữ liệu có thể thay đổi trong quá trình sử dụng
        *****************
        ReactJS dùng virtual DOM (DOM ảo)
        ReactJS có hỗ trợ SSR (Server side rendering)
        ReactJS ràng buộc dữ liệu 1 chiều: one-way data binding
        *****************
        SPA: Single-pages application: Ứng dụng trang đơn
        index.html: Lần đầu tiên tải trang thì toàn bộ dữ liệu sẽ được tải xuống file index.html
        MPA: Multi-pages application: ứng dụng nhiều trang
        khi truy cập trang nào thì sẽ loading dữ liệu trang đó: ==> tối ưu cho SEO (search engine optimization) tối ưu công cụ tìm kiếm
        cài thêm thư viện React Rounter-DOM: để quản lí các route
        *****************
        ReactJS dùng thư viện Babel để biên dịch code JS => JSX
        *****************
        Là cách truy cập thuộc tính của đối tượng hoặc 1 phần tử trong array 1 cách dễ dàng
        */}
    </>
  );
}

export default App;
