use maud::*;

pub fn page() -> Markup {
    html! {
        main class="index" {
            p { "0x10" }
            hr;
            div {
                a href="/social" { "Social" }
                a href="/dev" { "Dev" }
            }
        }
    }
}
