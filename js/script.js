// BỘ LỌC TRẠNG THÁI - Filter Button Status
const buttonFilterStatus = document.querySelectorAll("[button-filter-status]");
if(buttonFilterStatus) {
    buttonFilterStatus.forEach(button => {
        // lắng nghe sự kiên nút nhấn
        button.addEventListener("click", (event) => {
            // lấy đường dẫn url - Bom Location
            let url = new URL(window.location.href); // window.location thôi vẫn được

            // lấy trạng thái của nút - Dom Html
            const status = button.getAttribute("button-filter-status");

            // set ?query cho url
            if(status)
                url.searchParams.set("status", status);

            else
                url.searchParams.delete("status");

            // chuyển hướng url
            window.location.href = url.href;
        });
    });
}
// HẾT BỘ LỌC TRẠNG THÁI - End Filter Button Status

// FORM TÌM KIẾM - Form Search
const formSearch = document.querySelector("[form-search]");
if(formSearch) {
    // lắng nge sự kiện
    formSearch.addEventListener("submit", (event) => {
        event.preventDefault(); // chặn sự kiện mặc định của form

        // lấy đường dẫn url - Bom Location
        let url = new URL(location.href); 

        let tagInput = formSearch.querySelector("input");

        // set ?query cho url
        if(tagInput.value)
            url.searchParams.set("keyword", tagInput.value);

        else
            url.searchParams.delete("keyword");
        
        // chuyển hướng url
        window.location.href = url.href;
    });
}
// END FORM TÌM KIẾM - Hết Form Search

