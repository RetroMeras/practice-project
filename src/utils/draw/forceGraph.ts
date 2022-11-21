import d3 from "d3";
import { IEntity } from "../../types/IEntity";
import {IRelation} from "../../types/IRelation";

function ForceGraph({
  entities, // an iterable of node objects (typically [{id}, …])
  relations // an iterable of link objects (typically [{source, target}, …])
}: {
  entities: IEntity[], // an iterable of node objects (typically [{id}, …])
  relations: IRelation[] // an iterable of link objects (typically [{source, target}, …])
}, {
  nodeFill = "currentColor", // node stroke fill (if not using a group color encoding)
  nodeStroke = "#fff", // node stroke color
  nodeStrokeWidth = 1.5, // node stroke width, in pixels
  nodeStrokeOpacity = 1, // node stroke opacity
  nodeRadius = 5, // node radius, in pixels
  linkStroke = "#999", // link stroke color
  linkStrokeOpacity = 0.6, // link stroke opacity
  linkStrokeWidth = 1.5, // given d in links, returns a stroke width in pixels
  linkStrokeLinecap = "round", // link stroke linecap
  width = 640, // outer width, in pixels
  height = 400, // outer height, in pixels
} = {}) {
  // Compute values.
  // const N = d3.map(entities, nodeId).map(intern);
  // const LS = d3.map(links, linkSource).map(intern);
  // const LT = d3.map(links, linkTarget).map(intern);
  // const T = d3.map(entities, (node: IEntity) => node.title);
  // const W = typeof linkStrokeWidth !== "function" ? null : d3.map(links, linkStrokeWidth);
  // const L = typeof linkStroke !== "function" ? null : d3.map(links, linkStroke);

  // Replace the input nodes and links with mutable objects for the simulation.
  const nodes = d3.map(entities, (entity) => ({id: entity.uuid, ...entity}));
  const entity_dict:{[key: string]: IEntity} = {}
  for(let i = 0; i< entities.length; i++){
    entity_dict[entities[i].uuid] = entities[i]
  }
  const links = relations.map(item => ({source: item.from, target: item.to, ...item}))
  // links = d3.map(links, (_, i) => ({source: LS[i], target: LT[i]}));

  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(({index: i}) => nodes[i || 0].id);


  const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force("link", forceLink)
      .force("charge", forceNode)
      .force("center",  d3.forceCenter())
      .on("tick", ticked);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  const link = svg.append("g")
      .attr("stroke", typeof linkStroke !== "function" ? linkStroke : null)
      .attr("stroke-opacity", linkStrokeOpacity)
      .attr("stroke-width", typeof linkStrokeWidth !== "function" ? linkStrokeWidth : null)
      .attr("stroke-linecap", linkStrokeLinecap)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg.append("g")
      .attr("fill", nodeFill)
      .attr("stroke", nodeStroke)
      .attr("stroke-opacity", nodeStrokeOpacity)
      .attr("stroke-width", nodeStrokeWidth)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("r", nodeRadius)
      .call(drag(simulation));

  function ticked() {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  }

  function drag(simulation) {
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  return Object.assign(svg.node(), {scales: {color}});
}