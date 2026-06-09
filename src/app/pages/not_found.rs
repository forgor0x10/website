use maud::*;

pub fn page() -> Markup {
    html! {
        main {
            p class="text-center text-red" {
                "Error!"
            }
            hr;
            p class="text-center" {
                "404 - Not Found" br;
                "Are you lost?"
            }
            hr;
            div class="center-container" {
                a href="/" { "<-" }
            }
        }
    }
}
