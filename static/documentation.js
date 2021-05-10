const accordian_items = document.getElementsByClassName("accordian-item");

class ProcessAccordian {
  constructor(accordian_item) {
    const accordian_child_nodes = accordian_item.children;
    this.accordian_head = accordian_child_nodes[0];
    this.accordian_body = accordian_child_nodes[1];
    this.expand_icon = this.accordian_head.children[1];
  }

  process() {
    if (this.expand_icon.className === "accordian-collapse") {
      this.expansion_process();
    } else {
      this.collapsing_process();
    }
  }

  expansion_process() {
    this.expand_icon.className = "accordian-expand";
    this.accordian_body.className = "accordian-body-show";
  }

  collapsing_process() {
    this.expand_icon.className = "accordian-collapse";
    this.accordian_body.className = "accordian-body";
  }
}

for (const accordian_item of accordian_items) {
  accordian_item.addEventListener("click", () => {
    const processAccordian = new ProcessAccordian(accordian_item);
    processAccordian.process();
  });
}
