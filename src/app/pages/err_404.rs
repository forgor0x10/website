use maud::*;

pub fn page() -> Markup {
    html! {
        div class="v-container center" {
            h1 { "404" }
            p { "The page you were looking for could not be found." }
            a class="button" href="/" { "Take me home" }
        }
    }
}
