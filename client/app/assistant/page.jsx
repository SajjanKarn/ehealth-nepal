"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <div
        style={{
          height: "80vh",
          width: "60%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          border: "1px solid black",
          borderRadius: "20px",
          padding: 10,
        }}
      >
        <div
          style={{
            width: "100%",
            background: "gray",
            borderRadius: 20,
            fontWeight: 900,
            marginBottom: 10,
            height: "15%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Health Assistant Powered By OpenAI
        </div>

        <div
          style={{
            height: "70%",
            overflowY: "scroll",
          }}
        >
          {messages.map((m) => (
            <div
              key={m.id}
              style={{
                width: "100%",
                padding: 10,
                background: m.role === "user" ? "#176B87" : "gray",
                margin: "10px 0",
                borderRadius: 20,
              }}
            >
              {m.role}: {m.content}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            height: "15%"
          }}
        >
          <input
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            className="form-control"
          />
        </form>
      </div>
    </div>
  );
}
