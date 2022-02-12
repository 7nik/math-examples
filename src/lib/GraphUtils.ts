type Vertex = {
    i: number,
    x: number,
    y: number,
    weight?: number,
    color?: string,
};
type Edge = {
    v1: number,
    v2: number,
    weight?: number,
    color?: string,
};
export type { Vertex, Edge };

const verticesExample: Vertex[] = [{
    i: 1, x: 100, y: 0,
}, {
    i: 2, x: 200, y: 0,
}, {
    i: 3, x: 300, y: 0,
}, {
    i: 4, x: 0, y: 100,
}, {
    i: 5, x: 100, y: 100,
}, {
    i: 6, x: 200, y: 100,
}, {
    i: 7, x: 300, y: 100,
}, {
    i: 8, x: 400, y: 100,
}, {
    i: 9, x: 100, y: 200,
}, {
    i: 10, x: 200, y: 200,
}, {
    i: 11, x: 300, y: 200,
}];

const edgesExample: Edge[] = [{
    v1: 1, v2: 2, weight: 9
}, {
    v1: 1, v2: 4, weight: 10
}, {
    v1: 1, v2: 5, weight: 5
}, {
    v1: 1, v2: 6, weight: 11
}, {
    v1: 2, v2: 3, weight: 3
}, {
    v1: 2, v2: 6, weight: 5
}, {
    v1: 3, v2: 6, weight: 12
}, {
    v1: 3, v2: 7, weight: 10
}, {
    v1: 3, v2: 8, weight: 7
}, {
    v1: 4, v2: 5, weight: 6
}, {
    v1: 4, v2: 9, weight: 10
}, {
    v1: 5, v2: 6, weight: 15
}, {
    v1: 5, v2: 9, weight: 5
}, {
    v1: 5, v2: 10, weight: 8
}, {
    v1: 6, v2: 7, weight: 4
}, {
    v1: 6, v2: 10, weight: 11
}, {
    v1: 7, v2: 8, weight: 11
}, {
    v1: 7, v2: 10, weight: 8
}, {
    v1: 7, v2: 11, weight: 6
}, {
    v1: 8, v2: 11, weight: 4
}]; 

export function getExamples (): { vertices:Vertex[], edges:Edge[] } {
    return {
        vertices: verticesExample.map(v => ({...v})),
        edges: edgesExample.map(e => ({...e})),
    }
}

export function getEdgeIndex (v1: number, v2: number, edges: Edge[]): number {
    return edges.findIndex(e => e.v1==v1 && e.v2==v2 || e.v1==v2 && e.v2==v1);
}
export function getEdges (v:number, edges: Edge[]): Edge[] {
    return edges
        .filter(({ v1, v2 }) => v1==v || v2==v)
        .sort((e1, e2) => Math.min(e1.v1, e1.v2) - Math.min(e2.v1, e2.v2) || Math.max(e1.v1, e1.v2) - Math.max(e2.v1, e2.v2));
}
export function markEdge (edge: Edge, color:string, edges: Edge[]): Edge[] {
    const index = edges.indexOf(edge);
    if (index >= 0) {
        edges[index].color = color;
    }
    return edges;
}
export function markVertex (i:number, color:string, vertices: Vertex[]): Vertex[] {
    const index = vertices.findIndex(v => v.i == i);
    if (index >= 0) {
        vertices[index].color = color;
    }
    return vertices;
}
export function findLoop (list: Edge[]): Edge[] | null {
    const visitedV: number[] = [list[list.length - 1].v1];
    const visitedE: Edge[] = [];
    const queue = [visitedV[0]];
    const loop: Edge[] = [];
    
    while (queue.length > 0) {            
        const ee = getEdges(queue[0], list) 
            .filter(e => !visitedE.includes(e));
        if (ee.length > 0) {
            const e = ee[0];
            visitedE.push(e);
            loop.push(e);
            const vi = e.v1 === queue[0] ? e.v2 : e.v1;
            if (visitedV.includes(vi)) {
                return loop;
            } else {
                queue.unshift(vi);
                visitedV.push(vi);
            }
        } else {
            loop.pop();
            queue.shift();
        }
    }
    return null;
}
export function sortEdges (edges: Edge[], ascending = true): Edge[] {
    return edges.slice().sort((e1, e2) => {
        const diff = ascending
            ? (e1.weight || 0) - (e2.weight || 0)
            : (e2.weight || 0) - (e1.weight || 0);
        return diff || Math.min(e1.v1, e1.v2) - Math.min(e2.v1, e2.v2);
    });
}

export function resetGraph (vertices: Vertex[], edges: Edge[], weight?: number): [Vertex[], Edge[]] {
    vertices.forEach(v => {
        v.color = "grey";
        delete v.weight;
    });
    edges.forEach(e => { 
        e.color = "silver";
        if (weight) e.weight = weight;
    });
    return [vertices, edges];
}
