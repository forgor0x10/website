use maud::*;

pub fn page() -> Markup {
    html! {
        main {
            p class="text-center" { "Dev" }
            hr;
            p {
                a href="https://github.com/forgor0x10" { "GitHub" } br;
                a href="https://forgor0x10.itch.io" { "itch.io" }
            }
            hr;
            div class="center-container" {
                a href="/" { "<-" }
            }
        }
    }
}
