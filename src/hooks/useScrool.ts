import { SetStateAction, useState } from "react";

export function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = (event: { target: { scrollTop: SetStateAction<number>; }; }) => setScrollTop(event.target.scrollTop);
  return [scrollTop, { onScroll }];
}
