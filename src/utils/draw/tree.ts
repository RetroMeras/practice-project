import * as d3 from 'd3';
import { BaseType } from 'd3';

export interface IData{
  material: string;
  company: {
    name: string,
    url?: string,
  },
  children: IData[];
}

export const Tree: (selector: string, data: IData, settings?: any) => BaseType = (selector, data, custom_settings) => {
  const settings = {
    width: 900,
    height: 900,
    paddingH: 10, // horizontal padding for edge columns
    link: null,
    dx: 20,
    ...custom_settings
  }
  const tree = d3.tree;
  const curve = d3.curveBumpX;

  const root = d3.hierarchy(data);


  // Compute labels and titles
  const descendants = root.descendants(); // flattens into topological order
  const L = descendants.map(d => d.data.material);

  const dx = settings.dx;
  const dy = settings.width / (root.height + settings.paddingH);
  tree().nodeSize([dx, dy])(root);

  let x0 = Infinity;
  let x1 = -x0;
  root.each((d: any) => {
    x1 = Math.max(d.x, x1);
    x0 = Math.min(d.x, x0);
  });

  settings.height = settings.height = x1 - x0 + dx * 2;

  const svg = d3.select(selector)
      .attr("viewBox", [-dy * settings.paddingH / 2, x0 - dx, settings.width, settings.height])
      .attr("width", settings.width)
      .attr("height", settings.height)
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("font-family", "sans-serif")
      .attr("font-size", "10");

  svg.append("g")
          .attr("fill", "none")
          .attr("stroke", "#555")
          .attr("stroke-opacity", 0.4)
          .attr("stroke-width", 1.5)
      .selectAll("path")
          .data(root.links())
          .join("path")
              .attr("d", d3.link(curve).x((d: any) => d.y).y((d: any) => d.x));

  console.log(descendants)
  const node = svg.append("g")
      .selectAll("a")
      .data(root.descendants())
      .join("a")
          .attr("xlink:href", (d) => d.data.company.url || null)
          .attr("target", settings.link == null ? null : "_blank")
          .attr("transform", (d: any) => `translate(${d.y},${d.x})`);

  node.append("circle")
      .attr("fill", (d: any) => d.children ? "#555" : "#999")
      .attr("r", 3)

  node.append("title")
      .text(d => d.data.company.name)

  node.append("text")
      .attr("dy", "0.32em")
      .attr("x", d => d.children ? -6 : 6)
      .attr("text-anchor", d => d.children ? "end" : "start")
      .attr("paint-order", "stroke")
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .text((d, i) => L[i])

  return svg.node();
}