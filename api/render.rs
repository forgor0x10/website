use vercel_runtime::{Error, Request, Response, ResponseBody, run, service_fn};

use website::app;

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
    let page_name = if !url_arr.is_empty() && !url_arr[0].is_empty() {
        url_arr[0]
    } else {
        "index"
    };

    let page = match page_name {
        "index" => app::pages::index::page(),
        "social" => app::pages::social::page(),
        "dev" => app::pages::dev::page(),
        _ => app::pages::not_found::page(),
    }
    .into_string();

    let layout = app::layout::page(&page, url_pathname);
    let html = layout.into_string();

    Ok(Response::builder()
        .status(200)
        .header("Content-Type", "text/html")
        .body(ResponseBody::from(html))?)
}
