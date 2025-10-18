import { mount } from "@vue/test-utils";
import LessonCard from "@/components/lesson/LessonCard.vue";

test("Renders LessonCard", () => {
  const wrapper = mount(LessonCard, {
    props: {
      lesson: {
        title: "Diatonic Chords: 1st Inversion - Chord Shapes and Qualities",
        type: "Lesson",
        thumb: "/images/thumbnails/thumb1.png",
        progress: 100,
        duration: "23:23",
        saved: true,
      },
    },
  });
  expect(wrapper.text()).toContain(
    "Diatonic Chords: 1st Inversion - Chord Shapes and Qualities"
  );
});
