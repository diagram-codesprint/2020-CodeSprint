const instances = new Set();

class Circle {
  constructor() {
    this.shape = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    this.shape.setAttribute("tabindex", "0");
    this.shape.setAttribute("role", "img");
    this.shape.setAttribute("aria-roledescription", "circle");
    this.shape.setAttribute("stroke", "currentColor");
    instances.add(this);
  }

  get id() {
    return this.shape.id;
  }

  set id(val) {
    if (val !== null) {
      this.shape.setAttribute("id", val);
    } else {
      this.shape.removeAttribute("id");
    }
  }

  get radius() {
    return this.shape.getAttribute("r");
  }

  get centerX() {
    return this.shape.getAttribute("cx");
  }

  get centerY() {
    return this.shape.getAttribute("cy");
  }

  get label() {
    return `radius of ${this.radius} at (${this.centerX}, ${this.centerY})`;
  }

  attach(attachElement) {
    if (attachElement.contains(this.shape)) return this;
    attachElement.appendChild(this.shape);
    return this;
  }

  draw({ centerX, centerY, radius }) {
    if (centerX) {
      this.shape.setAttribute("cx", centerX);
    }
    if (centerY) {
      this.shape.setAttribute("cy", centerY);
    }
    if (radius) {
      this.shape.setAttribute("r", radius);
    }
    this.shape.setAttribute("aria-label", this.label);
    return this;
  }

  destroy() {
    this.shape.remove();
    instances.delete(this);
  }

  static create(attachElement, initialValues) {
    return new Circle().attach(attachElement).draw(initialValues);
  }

  static get instances() {
    return Array.from(instances);
  }
}
