use std::fs;
use vercel_runtime::{Error, Request, Response, ResponseBody, run, service_fn};

#[tokio::main]
async fn main() -> Result<(), Error> {
    let service = service_fn(handler);
    run(service).await
}

async fn handler(req: Request) -> Result<Response<ResponseBody>, Error> {
    if req.method() != "GET" {
        return Ok(Response::builder()
            .status(405)
            .body(ResponseBody::from(()))?);
    }

    let url_pathname = req.uri().path();
    let url_arr: Vec<&str> = url_pathname.split("/").skip(1).collect();
    let page = if !url_arr.is_empty() && !url_arr[0].is_empty() {
        url_arr[0]
    } else {
        "index"
    };

    let layout = fs::read_to_string("templates/layout.html")?;
    let page_path = format!("pages/{}.html", page);
    let page_content = match fs::read_to_string(&page_path) {
        Ok(content) => content,
        Err(_) => match fs::read_to_string("pages/404.html") {
            Ok(content) => content,
            Err(_) => String::from("<p>404</p>"),
        },
    };

    let html = layout
        .replace("{content}", &page_content)
        .replace("{pathname}", &url_pathname)
        .replace("{bytes}", &page_content.len().to_string());

    Ok(Response::builder()
        .status(200)
        .header("Content-Type", "text/html")
        .body(ResponseBody::from(html))?)
}
