import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "list" ]

  toggleList(){
    this.listTarget.classList.toggle("hide")
  }
}
