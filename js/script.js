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
            if(status) {
                url.searchParams.set("status", status);
                url.searchParams.set("page", 1); // khi filter cái status sẽ set về đầu trang
            }
                

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
        if(tagInput.value) {
            url.searchParams.set("keyword", tagInput.value);
            url.searchParams.set("page", 1); // khi tìm kiếm thì phải reset page về đầu trang
        }
        
        else
            url.searchParams.delete("keyword");
            
        
        // chuyển hướng url
        window.location.href = url.href;
    });
}
// END FORM TÌM KIẾM - Hết Form Search

// PHÂN TRANG - Pagination
const paginationBlock = document.querySelector("[pagination-block]");
if(paginationBlock) {
    // lấy các nút pagination
    paginationListItem = paginationBlock.querySelectorAll("[pagination-item]");

    paginationListItem.forEach(item => {
        // lắng nghe sự kiện
        item.addEventListener("click", (event) => {
            // lấy đường dẫn url - window location
            let url = new URL(window.location.href);

            let page = item.getAttribute("pagination-item");
            console.log(page);
            // set ?query
            url.searchParams.set("page", page);

            // chuyển hướng url
            window.location.href = url.href;
        });
    });
}
// HẾT PHÂN TRANG - End Pagination