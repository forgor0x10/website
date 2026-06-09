use maud::*;

pub fn page(content: &str, pathname: &str) -> Markup {
    html! {
        (DOCTYPE)
        html lang="en" {
            head {
                meta charset="UTF-8";
                meta name="viewport" content="width=device-width, initial-scale=1.0";
                title { "/var/task" (pathname) };
                link rel="icon" type="image/x-icon" href="/img/favicon.png";
                link href="/css/styles.css" rel="stylesheet" type="text/css";
            }
            body {
                (PreEscaped(content))
                footer { (pathname) ", " (content.len()) " bytes total" }
                div class="load-screen";
            }
        }
    }
}
