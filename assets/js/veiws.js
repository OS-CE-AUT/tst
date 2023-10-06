import { getAnalytics, logEvent } from "firebase/analytics";
console.log('views')
const analytics = getAnalytics();
console.log('logEvent', logEvent);
logEvent(analytics, 'page_view');