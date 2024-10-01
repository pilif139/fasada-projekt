import { writable } from "svelte/store";

type PointsStore = {
    points: number;
    YourAnswers: number[];
};

export const points = writable({
    points: 0,
    YourAnswers: [],
} as PointsStore);