use maud::*;

pub fn page() -> Markup {
    html! {
        main {
            p class="text-center" { "Social" }
            hr;
            p {
                a href="https://x.com/forgor0x10" { "X (Twitter)" } br;
                a href="https://youtube.com/forgor0x10" { "YouTube" } br;
                a href="https://last.fm/user/forgorOx1O" { "last.fm" }
            }
            hr;
            div class="center-container" {
                a href="/" { "<-" }
            }
        }
    }
}
