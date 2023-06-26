// Підключаємо потрібні технології
import React from "react";

// ============================================

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";

import ChatList from "../component/ChatList";

// ============================================
// Імпортуємо файли потрібних картинок

import FamilyPhoto from "../file/photo/family-natur.png";
import FoothPhoto from "../file/photo/footh-new.png";
import MaxPhoto from "../file/photo/son-max.png";
import NewsPhoto from "../file/photo/news.png";

// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: FamilyPhoto,
    name: "Родина",
    message: "Як Ваші справи?",
    messageAmount: 20,
    notifyOff: true,
    time: "20:01",
    user: "Син Джек"
  },
  {
    id: 2,
    photo: FoothPhoto,
    name: "Алекс",
    message: "Привіт. Як зіграли?",
    isUnread: true,
    time: "19:35"
  },
  {
    id: 3,
    photo: MaxPhoto,
    name: "Син Макс",
    message: "Я люблю тебе!",
    messageAmount: 15,
    time: "08:54"
  },
  {
    id: 4,
    photo: NewsPhoto,
    name: "Новини",
    message: "Доброго ранку. Сьогодні 21.06.2023...",
    isRead: true,
    time: "06:30",
    hashtag: "#news"
  }
];

// ============================================
// Генеруємо сторінку "Чати"

export default function Chats() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Всі Чати" />
      <div>
        <ChatList list={CHATS_LIST}></ChatList>
      </div>
      {/* В activePage передаємо посилання поточної сторінки */}
      <Menu activePage="/chats" />
    </Page>
  );
}
