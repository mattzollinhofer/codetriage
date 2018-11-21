import { Controller } from "stimulus"

export default class extends Controller {
  static targets = []

  initialize() {
    this.utc_to_local()
    this.sort_options_by_time()
  }

  utc_to_local(){
    Array.from(this.element.options).forEach((option) => {
      var time = new Date(option.value);
      option.text = LocalTime.strftime(time, "%H:%M %Z");
    })
  }

  sort_options_by_time(){
    let sorted_options = Array.from(this.element.options).sort(function(a,b){
      return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
    })

    this.element.innerHTML = sorted_options.map(x => x.outerHTML);
  }
}
