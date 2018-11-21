import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "tab" ]

  initialize() {
    this.activate()
  }

  activate() {
    let target = event.currentTarget;
    if (target == document){
      target = this.tabTarget
    }

    this.tabTargets.forEach((tab) => {
      tab.removeAttribute("data-tabs-activated")
      if (tab == target){
        tab.setAttribute("data-tabs-activated", true)
      }
    })
  }
}
