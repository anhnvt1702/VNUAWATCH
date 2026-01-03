INSERT IGNORE INTO brand (brand_id, name, origin) VALUES
(1, 'Casio', 'Japan'),
(2, 'Seiko', 'Japan'),
(3, 'Citizen', 'Japan'),
(4, 'Bentley', 'Thụy Sỹ'),
(5, 'SRWatch', 'Japan');

INSERT IGNORE INTO category (category_id, category_name, description) VALUES
(1, 'Classic', 'Đồng hồ phong cách cổ điển, tối giản'),
(2, 'Sport', 'Đồng hồ thể thao, chống nước tốt'),
(3, 'Luxury', 'Đồng hồ cao cấp, sang trọng');

INSERT IGNORE INTO product (product_id, title, price, stock_quantity, brand_id, category_id) VALUES
(1, 'Đồng Hồ Casio 40mm Nam MTP-V005D-2B5UDF', 768800, 50, 1, 1),
(2, 'Đồng Hồ Casio 45mm Nam MTP-VD01L-1EVUDF', 945600, 40, 1, 2),
(3, 'Đồng Hồ Bentley 40mm Nam BL1869-101MWBB', 3370000, 30, 4, 3),
(4, 'Đồng Hồ SRWatch 40mm Nam SG7004.1205GM', 3195000, 35, 5, 1),
(5, 'Đồng Hồ Seiko 37mm Nam SNK357K1', 4725000, 25, 2, 1),
(6, 'Đồng Hồ Citizen 40mm Nam NH8350-59L', 4638000, 28, 3, 3);

INSERT IGNORE INTO product_image (id, product_id, image_url, is_thumbnail) VALUES
(1, 1, 'https://cdn.watchstore.vn/wp-content/uploads/2021/08/mtp-v005d-2b5udf-1615935823-292418242-1712572700.jpg', true),
(2, 1, 'https://cdn.watchstore.vn/wp-content/uploads/2021/08/mtp-v005d-2b5-2-1649903228613-1712572697.jpg', false),
(3, 1, 'https://cdn.watchstore.vn/wp-content/uploads/2021/08/mtp-v005d-2b5-3-1649903235454-1712572698.jpg', false),
(4, 1, 'https://cdn.watchstore.vn/wp-content/uploads/2021/08/mtp-v005d-2b5-4-1649903238749-1712572698.jpg', false),
(5, 1, 'https://cdn.watchstore.vn/wp-content/uploads/2021/08/mtp-v005d-2b5-5-1649903242230-1712572699.jpg', false),
(6, 2, 'https://cdn.watchstore.vn/wp-content/uploads/2021/05/1-khung-sp-1274501040-1790641903-1712568185.jpg', true),
(7, 2, 'https://cdn.watchstore.vn/wp-content/uploads/2021/05/mtp-vd01l-1e-2-1657612601314-1712568182.jpg', false),
(8, 2, 'https://cdn.watchstore.vn/wp-content/uploads/2021/05/mtp-vd01l-1e-3-1657612606139-1712568182.jpg', false),
(9, 2, 'https://cdn.watchstore.vn/wp-content/uploads/2021/05/mtp-vd01l-1e-4-1657612608344-1712568183.jpg', false),
(10,2, 'https://cdn.watchstore.vn/wp-content/uploads/2021/05/mtp-vd01l-1e-5-1657612611694-1712568183.jpg', false),
(11, 3, 'https://cdn.watchstore.vn/wp-content/uploads/2022/05/bl1869-101mwbb-1-1654855865218-1712584389.jpg', true),
(12, 3, 'https://cdn.watchstore.vn/wp-content/uploads/2022/05/bl1869-101mwbb-2-1654855861431-1712584389.jpg', false),
(13, 3, 'https://cdn.watchstore.vn/wp-content/uploads/2022/05/bl1869-101mwbb-3-1654855868728-1712584390.jpg', false),
(14, 3, 'https://cdn.watchstore.vn/wp-content/uploads/2022/05/bl1869-101mwbb-4-1654855871963-1712584390.jpg', false),
(15, 3, 'https://cdn.watchstore.vn/wp-content/uploads/2022/05/bl1869-101mwbb-5-1654855875310-1712584391.jpg', false),
(16, 4, 'https://cdn.watchstore.vn/wp-content/uploads/2024/07/sg7004-1205gm-1_1723190623.jpg', true),
(17, 4, 'https://cdn.watchstore.vn/wp-content/uploads/2024/07/sg7004-1205gm-6_1723190624.jpg', false),
(18, 4, 'https://cdn.watchstore.vn/wp-content/uploads/2024/07/sg7004-1205gm-4_1723190624.jpg', false),
(19, 4, 'https://cdn.watchstore.vn/wp-content/uploads/2024/07/sg7004-1205gm-7_1723190624.jpg', false),
(20, 4, 'https://cdn.watchstore.vn/wp-content/uploads/2024/07/sg7004-1205gm-3_1723190624.jpg', false),
(21, 5, 'https://cdn.watchstore.vn/wp-content/uploads/2020/12/snk357k1-1712565956.jpg', true),
(22, 5, 'https://cdn.watchstore.vn/wp-content/uploads/2020/12/dong-ho-seiko-snk357k1_2-ims-1712565954.jpg', false),
(23, 5, 'https://cdn.watchstore.vn/wp-content/uploads/2020/12/dong-ho-seiko-snk357k1_3-ims-1712565954.jpg', false),
(24, 5, 'https://cdn.watchstore.vn/wp-content/uploads/2020/12/dong-ho-seiko-snk357k1_4-ims-1712565955.jpg', false),
(25, 5, 'https://cdn.watchstore.vn/wp-content/uploads/2020/12/dong-ho-seiko-snk357k1_5-ims-1712565955.jpg', false),
(26, 6, 'https://cdn.watchstore.vn/wp-content/uploads/2020/09/nh8350-59l-1-834858534-969399190-1712554639.jpg', true),
(27, 6, 'https://cdn.watchstore.vn/wp-content/uploads/2020/09/nh8350-59l-2-1712554640.jpg', false),
(28, 6, 'https://cdn.watchstore.vn/wp-content/uploads/2020/09/nh8350-59l-3-1712554640.jpg', false),
(29, 6, 'https://cdn.watchstore.vn/wp-content/uploads/2020/09/nh8350-59l-4-1712554640.jpg', false),
(30, 6, 'https://cdn.watchstore.vn/wp-content/uploads/2020/09/nh8350-59l-5-1712554641.jpg', false);


INSERT IGNORE INTO watch_specification (
  id, product_id, series, movement_type, display_type, water_resistance,
  case_size_mm, case_thickness_mm, case_shape, case_color, case_material,
  dial_color, dial_style, glass_material, strap_material,
  style, design, utilities
) VALUES
(
  1, 1, 'MTP V005', 'Pin/Quartz', 'Kim (Analog)', '3 ATM',
  40, 8.1, 'Mặt tròn', 'Màu bạc', 'Thép không gỉ',
  'Xanh dương', 'Guilloche', 'Kính Khoáng', 'Thép Không Gỉ',
  'Tối giản, Công sở, Cổ điển', 'Siêu mỏng', 'Dạ quang, Giờ, phút, giây'
),
(
  2, 2, 'MTP VD01L', 'Pin/Quartz', 'Kim (Analog)', '5 ATM',
  45, 10.3, 'Mặt tròn', 'Màu bạc', 'Thép không gỉ',
  'Màu đen', NULL, 'Kính Khoáng', 'Dây Da',
  NULL, NULL, 'Dạ quang, Lịch ngày, Giờ, phút, giây'
),
(
  3, 3, NULL, 'Pin/Quartz', 'Kim (Analog)', '3 ATM',
  40, NULL, 'Mặt tròn', 'Màu bạc', 'Thép không gỉ',
  'Màu đen', NULL, 'Kính Sapphire', 'Dây Da',
  'Hiện đại, Công sở, Sang trọng', 'Giống Patek Philippe',
  'Dạ quang, Lịch ngày, Giờ, phút, giây'
),
(
  4, 4, NULL, 'Pin/Quartz', NULL, '5 ATM',
  40, 11.5, 'Mặt tròn', 'Màu bạc', NULL,
  'Màu nâu', NULL, 'Kính Sapphire', NULL,
  NULL, NULL, 'Dạ quang, Lịch ngày, Giờ, phút, giây'
),
(
  5, 5, 'Seiko 5', 'Cơ', NULL, '3 ATM',
  37, NULL, 'Mặt tròn', 'Màu bạc', NULL,
  'Màu xanh', NULL, 'Hardlex Crystal', 'Kim Loại',
  NULL, NULL, 'Lịch thứ, Lịch ngày, Giờ, phút, giây'
),
(
  6, 6, NULL, 'Cơ', NULL, '5 ATM',
  40, 11, 'Mặt tròn', NULL, NULL,
  'Màu xanh', NULL, 'Kính Khoáng', 'Kim Loại',
  'Sang trọng', NULL,
  'Dạ quang, Lịch thứ, Lịch ngày, Giờ, phút, giây'
);


INSERT IGNORE INTO user (avatar, created_at, email, full_name, password, phone, status, updated_at, user_name,is_admin) VALUES
('https://res.cloudinary.com/dkxnkqvrp/image/upload/v1766941340/defaultAvatar_vipt4c.jpg','2025-06-13 16:43:44.808653','admin@gmail.com','admin','$2a$10$2oVEqCd9UjOgmhg7YJrfO.IneVLdAcxnl4XZTOTtiFFJsXetjfgz.','0937123231','ACTIVE','2025-06-13 16:43:44.808653','admin',1),
('https://res.cloudinary.com/dkxnkqvrp/image/upload/v1766941340/defaultAvatar_vipt4c.jpg','2025-06-21 11:52:02.507690','test@gmail.com','test','$2a$10$MEmk6wDzOSOi9b1yBZlQtuKUHAW7CP41FWshKC6ubJH9zn6QKJE.S','0927361625','ACTIVE','2025-06-21 11:52:02.507690','test',0),
('https://res.cloudinary.com/dkxnkqvrp/image/upload/v1766941340/defaultAvatar_vipt4c.jpg','2025-06-21 11:52:26.501785','test1@gmail.com','test1','$2a$10$u9Ik5FObcoS.eIlP4r/ireiwDMBgDtj65P90HZxByy3roIUeKIW1K','0927362325','ACTIVE','2025-06-21 11:52:26.501785','test12',0);