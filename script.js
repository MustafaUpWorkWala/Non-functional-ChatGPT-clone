function getChatbotReply(input) {
  const msg = input.trim().toLowerCase();
  if (msg === 'hello' || msg === 'hey chatbot') return 'hello';
  if (msg === 'who made you') return 'Mustafa the great';
  return ''; // no reply for other messages
}
