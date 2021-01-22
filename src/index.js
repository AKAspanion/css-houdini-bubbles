class BubblesPainter {
  static get inputProperties() {
    return [
      "--bubbles-colors",
      "--bubbles-min-radius",
      "--bubbles-max-radius",
      "--bubbles-total-num",
      "--bubbles-is-dark",
    ];
  }

  parseProps(props) {
    return [
      "--bubbles-colors",
      "--bubbles-min-radius",
      "--bubbles-max-radius",
      "--bubbles-total-num",
      "--bubbles-is-dark",
    ].map((prop) => {
      if (!props.get(prop).length) {
        return undefined;
      }

      if (prop === "--bubbles-colors") {
        return props
          .get(prop)
          .toString()
          .split(",")
          .map((color) => color.trim());
      } else if (prop === "--bubbles-is-dark") {
        return props.get(prop).toString().trim();
      } else {
        return parseInt(props.get(prop).toString());
      }
    });
  }

  paint(c, { width: w, height: h }, props) {
    const [
      colors = ["#007C8E", "#7940c1"],
      minRadius = 10,
      maxRadius = 60,
      numCircles = 20,
      isDark = "no",
    ] = this.parseProps(props);

    c.beginPath();
    c.fillStyle = isDark === "yes" ? "rgb(0,0,0)" : "rgb(255,255,255)";
    c.fillRect(0, 0, w, h);
    c.closePath();

    for (let i = 0, max = numCircles; i < max; i++) {
      this.drawCircle(c, {
        x: this._rand(0, w),
        y: this._rand(0, h),
        r: this._rand(minRadius, maxRadius),
        color: colors[this._rand(0, colors.length - 1)],
        isDark,
      });
    }
  }

  drawCircle(c, bubble) {
    const { x, y, r } = bubble;

    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, false);
    c.fillStyle = this.drawGradient(c, bubble);
    c.fill();
    c.closePath();

    c.beginPath();
    c.ellipse(x, y - r + r / 1.25, r / 1.15, r / 1.25, Math.PI, 0, 2 * Math.PI);
    c.fillStyle = this.drawGradient(c, bubble);
    c.fill();
    c.closePath();

    c.beginPath();
    c.ellipse(
      x - r / 2 - r * 0.05,
      y - r / 2 - r * 0.15,
      r / 20,
      r / 6,
      Math.PI / 3.5,
      0,
      2 * Math.PI
    );
    c.fillStyle = "white";
    c.fill();
    c.closePath();
  }

  drawGradient(ctx, { x, y, r, color, isDark }) {
    const grd = ctx.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(
      0.7,
      `rgba(${isDark === "yes" ? "0,0,0" : "255,255,255"},0)`
    );
    grd.addColorStop(1, color);

    return grd;
  }

  _rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

registerPaint("bubbles", BubblesPainter);
