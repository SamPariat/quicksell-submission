import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import DisplayBar from './components/display-bar/DisplayBar';
import MainContent from './components/content/MainContent';

export default function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <DisplayBar />
      <MainContent />
    </QueryClientProvider>
  );
}
