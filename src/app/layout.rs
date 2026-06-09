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
                link rel="preconnect" href="https://fonts.googleapis.com";
                link rel="preconnect" href="https://fonts.gstatic.com" crossorigin;
                link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet";
                link rel="stylesheet" href="https://www.nerdfonts.com/assets/css/webfont.css";
            }
            body {
                header {
                    div {
                        button class="sidebar-button" id="sidebar-button" {
                            i class="nf nf-fa-bars" {}
                        }
                        img class="logo" src="https://unavatar.io/github/forgor0x10";
                        a class="static" href="/" { "0x10" }
                    }
                    div {}
                }
                div class="main-container" {
                    div id="sidebar" class="sidebar hidden" {
                        div class="content-container" {
                            a class="text" href="/" { "Home" }
                        }
                    }
                    main { (PreEscaped(content)) }
                }
                footer {
                    div {
                        p {
                            "Social" br;
                            a class="text" target="_blank"
                            href="https://x.com/forgor0x10"
                            { "X (Twitter)" } br;
                            a class="text" target="_blank"
                            href="https://youtube.com/@forgor0x10"
                            { "YouTube" } br;
                            a class="text" target="_blank"
                            href="https://last.fm/user/forgorOx1O"
                            { "last.fm" } br;
                        }
                        p {
                            "Dev" br;
                            a class="text" target="_blank"
                            href="https://github.com/forgor0x10"
                            { "GitHub" } br;
                            a class="text" target="_blank"
                            href="https://forgor0x10.itch.io"
                            { "itch.io" }
                        }
                    }
                    p {
                        "This website is open source. All code is available on "
                        a target="_blank" href="https://github.com/forgor0x10/website" { "GitHub" }
                        "."
                    }
                }
                script src="/js/layout.js" {}
            }
        }
    }
}
