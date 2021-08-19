-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 03, 2021 at 05:11 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `adey_ecommerce_v0`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE IF NOT EXISTS `addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `region` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `zone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sub_city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `zip_cod` int(11) NOT NULL,
  `kebele` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `village` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `longitude` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `latitude` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `country`, `region`, `zone`, `city`, `sub_city`, `zip_cod`, `kebele`, `village`, `longitude`, `latitude`, `description`, `created_at`, `updated_at`) VALUES
(1, '', '', '', '', '', 0, '', '', '', '', '', '2021-07-15 10:30:03', '2021-07-24 07:43:42'),
(2, 'ethiopia', 'amhara', 'east Gojjam', 'adet', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-15 11:04:11', '2021-07-15 11:04:11'),
(3, '', '', '', '', '', 0, '', '', '', '', '', '2021-07-16 13:06:38', '2021-07-24 11:01:03'),
(4, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:17:37', '2021-07-18 12:17:37'),
(5, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:18:05', '2021-07-18 12:18:05'),
(6, '', '', '', '', '', 0, '', '', '', '', '', '2021-07-23 12:43:29', '2021-07-24 11:03:23'),
(7, '', '', '', '', '', 0, '', '', '', '', '', '2021-07-24 05:30:14', '2021-07-24 13:12:05'),
(8, '', '', '', '', '', 0, '', '', '', '', '', '2021-07-24 06:18:18', '2021-07-24 10:59:22'),
(9, 'Ethiopia', '1', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '1', '1', 'fgggg', '2021-07-24 08:05:53', '2021-07-24 08:05:53'),
(10, '1', '2', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '6', '5', 'asdfalskd', '2021-07-24 10:19:19', '2021-07-24 10:19:19'),
(11, '1', '5', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '76676', '5767676', 'gfjhfgjfk', '2021-07-24 13:10:07', '2021-07-24 13:10:07'),
(12, '2', '2', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '4', '5', 'here and there', '2021-07-25 05:05:00', '2021-07-25 05:05:00'),
(13, 'Ethiopia', '5', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '4', '3', 'ewerwer', '2021-07-25 05:10:36', '2021-07-25 05:10:36'),
(14, 'Ethiopia', '5', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '3', '4', 'dlkfjasldfjasldf', '2021-07-25 05:18:33', '2021-07-25 05:18:33'),
(15, '1', '2', 'de', 'dm', 'amam', 454, 'embu', '14', '65', '7', 'ghgg', '2021-07-25 05:19:11', '2021-07-25 05:19:11'),
(16, '3', '1', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '5', '4', 'fasdfasdf', '2021-07-25 05:20:34', '2021-07-25 05:20:34'),
(17, 'Ethiopia', '5', 'de', 'dm', 'amam', 454, 'embu', '34', '34', '54', 'dsdhgdhs', '2021-07-25 05:21:56', '2021-07-25 05:21:56'),
(18, '1', '1', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '4', '5', 'hfjhkjhk', '2021-07-27 16:18:28', '2021-07-27 16:18:28'),
(19, '1', '1', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '6', '5', 'Here and there', '2021-08-01 16:28:53', '2021-08-01 16:28:53'),
(20, '1', '1', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '6', '5', 'Here and there', '2021-08-01 16:29:35', '2021-08-01 16:29:35'),
(21, '1', '1', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '6', '5', 'Here and there', '2021-08-01 16:29:54', '2021-08-01 16:29:54'),
(22, '1', '1', 'Gojjam', 'Lumame', 'Arada', 1000, '14', 'Fnote', '6', '5', 'Here and there', '2021-08-01 16:30:09', '2021-08-01 16:30:09');

-- --------------------------------------------------------

--
-- Table structure for table `billing_addresses`
--

CREATE TABLE IF NOT EXISTS `billing_addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `region` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `zone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sub_city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `zip_cod` int(11) NOT NULL,
  `kebele` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `village` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `longitude` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `latitude` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------
--
-- Table structure for table `buyer_statuses`
--

CREATE TABLE IF NOT EXISTS `buyer_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `buyer_statuses`
--

INSERT INTO `buyer_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'blocked', 'a user will be blocked from using our site.', '2021-07-13 06:13:39', '2021-07-13 06:13:39'),
(2, 'active', 'normal user', '2021-07-13 06:13:55', '2021-07-13 06:13:55');

--
-- Table structure for table `buyers`
--

CREATE TABLE IF NOT EXISTS `buyers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address_id` bigint(20) UNSIGNED NOT NULL,
  `buyer_status_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `buyers`
--

INSERT INTO `buyers` (`id`, `first_name`, `last_name`, `date_of_birth`, `email`, `phone_number`, `gender`, `password`, `type`, `address_id`, `buyer_status_id`, `created_at`, `updated_at`) VALUES
(1, 'alexx', 'teb', '2008-03-04', 'alexx@gmail.com', '986038473', 'f', '123', 'norman user', 3, 2, NULL, NULL),
(2, 'dayan', 'yenesew', '2008-03-04', 'dayan@gmail,com', '787568766', 'ff', '1234', 'guest', 1, 2, NULL, NULL);

-- --------------------------------------------------------


-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE IF NOT EXISTS `cart_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quantity` double NOT NULL,
  `cart_session_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_sku_id` bigint(20) UNSIGNED NOT NULL,
  `modified_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart_sessions`
--

CREATE TABLE IF NOT EXISTS `cart_sessions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `total_price` double NOT NULL,
  `buyer_id` bigint(20) UNSIGNED NOT NULL,
  `modified_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `have_sub_category` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `image`, `have_sub_category`, `created_at`, `updated_at`) VALUES
(12, 'Perfumes', 'perfumes', 'as always', '1627469583.jpg', 0, '2021-07-28 07:53:03', '2021-07-28 07:53:03'),
(13, 'Material', 'material', 'dfasdf', '1627470487.jpg', 0, '2021-07-28 08:08:07', '2021-07-28 08:08:07'),
(14, 'Ca', 'ca', 'here and there', '1627477521.jpg', 0, '2021-07-28 10:05:21', '2021-07-28 10:05:21'),
(15, 'Asbeza', 'asbeza', 'all kitchen....', '1627718613.jpg', 0, '2021-07-31 05:03:33', '2021-07-31 05:03:33'),
(16, 'food', 'food', 'cooked food', '1627906203.png', 0, '2021-08-02 09:10:03', '2021-08-02 09:10:03');

-- --------------------------------------------------------

--
-- Table structure for table `commissions`
--

CREATE TABLE IF NOT EXISTS `commissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_item_id` bigint(20) UNSIGNED NOT NULL,
  `amount` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE IF NOT EXISTS `discounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `discount_percent` double NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `start_date` date NOT NULL,
  `modified_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------
--
-- Table structure for table `employee_statuses`
--

CREATE TABLE IF NOT EXISTS `employee_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `employee_statuses`
--

INSERT INTO `employee_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'active', 'normal user', NULL, NULL),
(3, 'inactive', 'employee are inactive shall not access the database', '2021-07-13 04:43:13', '2021-07-13 04:43:13');

--
-- Table structure for table `employees`
--

CREATE TABLE IF NOT EXISTS `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `employee_status_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_visiblity_statuses`
--

CREATE TABLE IF NOT EXISTS `product_visiblity_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product_visiblity_statuses`
--

INSERT INTO `product_visiblity_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'new', 'product is new', '2021-07-13 06:02:56', '2021-07-13 06:02:56'),
(2, 'featured', 'product is featured', '2021-07-13 06:03:18', '2021-07-13 06:03:18'),
(3, 'best seller', 'product is best seller', '2021-07-13 06:03:50', '2021-07-13 06:03:50'),
(4, 'normal', 'product is normal(default)', '2021-07-13 06:04:18', '2021-07-13 06:04:18');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8_unicode_ci NOT NULL,
  `production_date` date NOT NULL,
  `expired_date` date NOT NULL,
  `commission_rate` double NOT NULL,
  `brand` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `total_quantity` double DEFAULT NULL,
  `manufacturer` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `number_of_sold` int(11) NOT NULL,
  `unit_id` bigint(20) UNSIGNED NOT NULL,
  `vendor_id` bigint(20) UNSIGNED NOT NULL,
  `sub_category_id` bigint(20) UNSIGNED NOT NULL,
  `product_status_id` bigint(20) UNSIGNED NOT NULL,
  `product_visiblity_status_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `description`, `short_description`, `production_date`, `expired_date`, `commission_rate`, `brand`, `total_quantity`, `manufacturer`, `number_of_sold`, `unit_id`, `vendor_id`, `sub_category_id`, `product_status_id`, `product_visiblity_status_id`, `category_id`, `created_at`, `updated_at`) VALUES
(174, 'Bokolo nifro', '', 'geramy bokolo', 'short1`short2`short3`short4short5', '2021-07-07', '2021-07-07', 2, 'Adey Basics', 5, 'Z End industrial engineering', 0, 36, 1, 21, 2, 4, 15, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(176, 'z comfort', '', 'High comfort', 'short1`short2`short3`short4short5', '2021-07-08', '2021-07-14', 2, 'Adey Basics', 4, 'Z End industrial engineering', 0, 38, 1, 14, 1, 4, 14, '2021-07-31 08:33:41', '2021-07-31 08:33:41'),
(179, 'Banana', '', 'fresh quality banana', 'short1`short2`short3`short4short5', '2021-07-14', '2021-07-23', 2, 'Adey Basics', NULL, 'Z End industrial engineering', 0, 36, 1, 20, 2, 2, 15, '2021-07-31 09:15:25', '2021-07-31 09:15:25'),
(180, 'Banana', '', 'fresh quality banana', 'short1`short2`short3`short4short5', '2021-07-14', '2021-07-23', 2, 'Adey Basics', NULL, 'Z End industrial engineering', 0, 36, 1, 20, 2, 2, 15, '2021-07-31 09:18:17', '2021-07-31 09:18:17'),
(181, 'Banana', '', 'fresh quality banana', 'short1`short2`short3`short4short5', '2021-07-14', '2021-07-23', 2, 'Adey Basics', NULL, 'Z End industrial engineering', 0, 36, 1, 20, 2, 2, 15, '2021-07-31 09:19:14', '2021-07-31 09:19:14'),
(183, 'Techno', '', 'our best version of techno v...', 'short1`short2`short3`short4short5', '2021-07-02', '2021-07-14', 2, 'Adey Basics', NULL, 'Z End industrial engineering', 0, 38, 1, 24, 2, 2, 13, '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(184, 'Samsung Galaxy', '', 'samsung s12', 'short1`short2`short3`short4short5', '2021-07-02', '2021-07-08', 2, 'Adey Basics', NULL, 'Z End industrial engineering', 0, 38, 1, 24, 2, 2, 13, '2021-07-31 12:09:19', '2021-07-31 12:09:19'),
(185, 'Samsung Galaxy', '', 'samsung s12', 'short1`short2`short3`short4short5', '2021-07-02', '2021-07-08', 2, 'Adey Basics', NULL, 'Z End industrial engineering', 0, 38, 1, 24, 2, 2, 13, '2021-07-31 12:14:22', '2021-07-31 12:14:22'),
(186, 'Heral News', '', 'samsung s12', 'short1`short2`short3`short4short5', '2021-07-02', '2021-07-08', 2, 'Adey Basics', NULL, 'Z End industrial engineering', 0, 38, 1, 24, 2, 2, 13, '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(187, 'Sinarline Exercise Book', '', 'best ISO standard', 'short1`short2`short3`short4short5', '2021-07-16', '2021-07-14', 2, 'das4', NULL, 'Z End industrial engineering', 0, 38, 1, 24, 2, 3, 13, '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(188, 'Zara', '', 'zara ena chandra', 'short1`short2`short3`short4short5', '2021-07-09', '2021-07-09', 2, 'Adey Basics', NULL, 'Z end technology', 0, 38, 1, 14, 1, 1, 14, '2021-07-31 12:31:08', '2021-07-31 12:31:08'),
(189, 'Zara', '', 'asdfasd', 'short1`short2`short3`short4short5', '2021-07-15', '2021-07-07', 2, 'Adey Basics', NULL, 'Z end technology', 0, 38, 1, 23, 1, 1, 13, '2021-07-31 12:38:58', '2021-07-31 12:38:58'),
(190, 'z comfort', '', 'sdfas', 'short1`short2`short3`short4short5', '2021-07-28', '2021-07-22', 2, 'da', NULL, 'Z end technology', 0, 38, 1, 23, 1, 1, 13, '2021-07-31 17:40:27', '2021-07-31 17:40:27'),
(194, 'shose', '', 'rtrt', 'heihg quality`heihg quality`heihg quality', '2021-07-30', '1970-01-01', 2, 'nike', NULL, 'nike campany', 0, 36, 1, 20, 1, 3, 15, '2021-08-02 06:31:36', '2021-08-02 06:31:36'),
(195, 'shose', '', 'rtrt', 'heihg quality`heihg quality`heihg quality', '2021-07-30', '1970-01-01', 2, 'nike', NULL, 'nike campany', 0, 36, 1, 20, 1, 3, 15, '2021-08-02 06:32:39', '2021-08-02 06:32:39'),
(196, 'shose', '', 'fgfg', 'heihg quality`heihg quality`heihg quality', '2021-07-30', '1970-01-01', 2, 'nike', NULL, 'nike campany', 0, 36, 1, 20, 1, 3, 15, '2021-08-02 06:43:57', '2021-08-02 06:43:57');

-- --------------------------------------------------------

--
-- Table structure for table `product_skus`
--

CREATE TABLE IF NOT EXISTS `product_skus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sku` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `unit_price` double NOT NULL,
  `onhand_quantity` int(11) NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product_skus`
--

INSERT INTO `product_skus` (`id`, `sku`, `unit_price`, `onhand_quantity`, `product_id`, `created_at`, `updated_at`) VALUES
(105, 'wh-lg', 3, 4, 174, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(106, 'bl-md', 5, 5, 174, '2021-07-31 07:23:07', '2021-07-31 07:23:07'),
(110, 'wh', 1410, 5, 183, '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(111, 'bl', 1246, 5, 183, '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(113, 'wh185', 3, 3, 185, '2021-07-31 12:14:22', '2021-07-31 12:14:22'),
(114, 'bl185', 4, 3, 185, '2021-07-31 12:14:23', '2021-07-31 12:14:23'),
(115, 'wh186', 3, 3, 186, '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(116, 'bl186', 4, 3, 186, '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(117, '32187', 4, 5, 187, '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(118, '50187', 5, 6, 187, '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(119, '10187', 4, 3, 187, '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(120, '196', 12, 42, 196, '2021-08-02 06:43:57', '2021-08-02 06:43:57');

-- --------------------------------------------------------

--
-- Table structure for table `product_statuses`
--

CREATE TABLE IF NOT EXISTS `product_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product_statuses`
--

INSERT INTO `product_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'pending', 'product is waiting to be accepted and verified by product managment team .it is a defualt state when a vendor list his product.till it is inspected', '2021-07-13 04:48:20', '2021-07-13 04:48:20'),
(2, 'active', 'product will be automatically listed on this state', '2021-07-13 04:48:58', '2021-07-13 04:48:58');

-- --------------------------------------------------------

--
-- Table structure for table `product_tag`
--

CREATE TABLE IF NOT EXISTS `product_tag` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `tag_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product_tag`
--

INSERT INTO `product_tag` (`id`, `product_id`, `tag_id`, `created_at`, `updated_at`) VALUES
(99, 174, 126, NULL, NULL),
(100, 174, 127, NULL, NULL),
(102, 176, 129, NULL, NULL),
(105, 179, 132, NULL, NULL),
(106, 179, 133, NULL, NULL),
(107, 181, 135, NULL, NULL),
(108, 181, 136, NULL, NULL),
(111, 183, 139, NULL, NULL),
(112, 184, 140, NULL, NULL),
(113, 185, 141, NULL, NULL),
(114, 186, 142, NULL, NULL),
(115, 187, 143, NULL, NULL),
(116, 188, 144, NULL, NULL),
(117, 189, 145, NULL, NULL),
(118, 189, 146, NULL, NULL),
(119, 190, 147, NULL, NULL),
(121, 195, 150, NULL, NULL),
(122, 196, 151, NULL, NULL);

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_sku_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `product_id`, `product_sku_id`, `name`, `created_at`, `updated_at`) VALUES
(80, 174, 105, '1627726986.jpg', '2021-07-31 07:23:07', '2021-07-31 07:23:07'),
(81, 174, 106, '1627726987.jpg', '2021-07-31 07:23:07', '2021-07-31 07:23:07'),
(82, 183, 110, '1627743767.png', '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(83, 183, 110, '1627743767.png', '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(84, 183, 110, '1627743767.png', '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(85, 183, 111, '1627743767.jpg', '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(86, 183, 111, '1627743767.png', '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(87, 183, 111, '1627743767.png', '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(88, 183, 111, '1627743767.png', '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(89, 183, 111, '1627743767.jpg', '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(90, 185, 113, '1627744463.png', '2021-07-31 12:14:23', '2021-07-31 12:14:23'),
(91, 185, 113, '1627744463.png', '2021-07-31 12:14:23', '2021-07-31 12:14:23'),
(92, 185, 114, '1627744463.png', '2021-07-31 12:14:23', '2021-07-31 12:14:23'),
(93, 185, 114, '1627744463.png', '2021-07-31 12:14:23', '2021-07-31 12:14:23'),
(94, 185, 114, '1627744463.jpg', '2021-07-31 12:14:23', '2021-07-31 12:14:23'),
(95, 186, 115, '1627744565.png', '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(96, 186, 115, '1627744565.png', '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(97, 186, 116, '1627744565.png', '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(98, 186, 116, '1627744565.png', '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(99, 186, 116, '1627744565.jpg', '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(100, 187, 117, '1627744916.jpg', '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(101, 187, 118, '1627744916.jpg', '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(102, 187, 118, '1627744916.jpg', '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(103, 187, 118, '1627744916.jpg', '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(104, 187, 118, '1627744916.jpg', '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(105, 187, 119, '1627744916.jpg', '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(106, 187, 119, '1627744916.png', '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(107, 187, 119, '1627744916.png', '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(108, 187, 119, '1627744916.png', '2021-07-31 12:21:56', '2021-07-31 12:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2021_07_09_011624_create_order_statuses_table', 1),
(2, '2021_07_09_011659_create_buyer_statuses_table', 1),
(4, '2021_07_09_011750_create_vendor_statuses_table', 1),
(5, '2021_07_09_011848_create_return_statuses_table', 1),
(6, '2021_07_09_011911_create_payment_type_statuses_table', 1),
(7, '2021_07_09_011957_create_product_statuses_table', 1),
(8, '2021_07_09_012034_create_product_visiblity_statuses_table', 1),
(9, '2021_07_09_012106_create_employee_statuses_table', 1),
(11, '2021_07_09_012230_create_review_statuses_table', 1),
(12, '2021_07_09_012310_create_tags_table', 1),
(13, '2021_07_09_012348_create_return_item_statuses_table', 1),
(15, '2021_07_09_033923_create_roles_table', 1),
(16, '2021_07_09_034241_create_permissions_table', 1),
(17, '2021_07_09_034459_create_permission_roles_table', 1),
(20, '2021_07_09_042225_create_buyers_table', 1),
(23, '2021_07_09_044947_create_products_table', 1),
(24, '2021_07_09_045024_create_reviews_table', 1),
(25, '2021_07_09_050941_create_product_skus_table', 1),
(26, '2021_07_09_222628_create_options_table', 1),
(27, '2021_07_09_222850_create_option_values_table', 1),
(28, '2021_07_09_223011_create_sku_values_table', 1),
(29, '2021_07_09_223053_create_images_table', 1),
(31, '2021_07_09_223322_create_cart_sessions_table', 1),
(32, '2021_07_09_223557_create_cart_items_table', 1),
(33, '2021_07_09_223904_create_billing_addresses_table', 1),
(34, '2021_07_09_223939_create_shipping_addresses_table', 1),
(37, '2021_07_09_224219_create_order_items_table', 1),
(38, '2021_07_09_224303_create_wishlists_table', 1),
(39, '2021_07_09_224345_create_wishlist_items_table', 1),
(40, '2021_07_09_230254_create_vendor_balances_table', 1),
(41, '2021_07_09_230624_create_return_methodes_table', 1),
(43, '2021_07_09_231720_create_return_items_table', 1),
(44, '2021_07_09_232318_create_refunds_table', 1),
(45, '2021_07_09_232335_create_refund_items_table', 1),
(46, '2021_07_09_232408_create_commissions_table', 1),
(47, '2021_07_09_232428_create_product_tags_table', 1),
(48, '2021_07_09_115327_add_date_of_birth_to_vendors', 2),
(49, '2021_07_09_122500_add_start_date_to_discounts', 3),
(52, '2021_07_09_223145_create_discounts_table', 5),
(57, '2021_07_09_042340_create_categories_table', 6),
(58, '2021_07_09_042414_create_sub_categories_table', 6),
(59, '2021_07_09_012157_create_units_table', 7),
(60, '2021_07_09_012455_create_addresses_table', 8),
(62, '2021_07_09_042119_create_vendors_table', 8),
(63, '2021_07_09_011725_create_payment_types_table', 9),
(65, '2021_07_09_223953_create_payment_details_table', 10),
(66, '2021_07_09_224007_create_orders_table', 10),
(67, '2014_10_12_100000_create_password_resets_table', 11),
(68, '2021_07_09_034810_create_employees_table', 11),
(69, '2019_12_14_000001_create_personal_access_tokens_table', 12);

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE IF NOT EXISTS `options` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`id`, `name`, `product_id`, `created_at`, `updated_at`) VALUES
(244, 'color', 174, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(245, 'size', 174, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(246, 'color', 176, '2021-07-31 08:33:41', '2021-07-31 08:33:41'),
(247, 'size', 176, '2021-07-31 08:33:41', '2021-07-31 08:33:41'),
(252, 'color', 183, '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(253, 'color', 184, '2021-07-31 12:09:19', '2021-07-31 12:09:19'),
(254, 'color', 185, '2021-07-31 12:14:22', '2021-07-31 12:14:22'),
(255, 'color', 186, '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(256, 'size', 187, '2021-07-31 12:21:56', '2021-07-31 12:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `option_values`
--

CREATE TABLE IF NOT EXISTS `option_values` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `option_values`
--

INSERT INTO `option_values` (`id`, `value`, `product_id`, `option_id`, `created_at`, `updated_at`) VALUES
(275, 'white', 174, 244, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(276, 'black', 174, 244, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(277, 'lg', 174, 245, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(278, 'sm', 174, 245, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(279, 'md', 174, 245, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(280, 'white', 176, 246, '2021-07-31 08:33:41', '2021-07-31 08:33:41'),
(281, 'black', 176, 246, '2021-07-31 08:33:41', '2021-07-31 08:33:41'),
(282, 'lg', 176, 247, '2021-07-31 08:33:41', '2021-07-31 08:33:41'),
(283, 'sm', 176, 247, '2021-07-31 08:33:41', '2021-07-31 08:33:41'),
(284, 'md', 176, 247, '2021-07-31 08:33:41', '2021-07-31 08:33:41'),
(295, 'white', 183, 252, '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(296, 'black', 183, 252, '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(297, 'white', 184, 253, '2021-07-31 12:09:19', '2021-07-31 12:09:19'),
(298, 'black', 184, 253, '2021-07-31 12:09:19', '2021-07-31 12:09:19'),
(299, 'white', 185, 254, '2021-07-31 12:14:22', '2021-07-31 12:14:22'),
(300, 'black', 185, 254, '2021-07-31 12:14:22', '2021-07-31 12:14:22'),
(301, 'white', 186, 255, '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(302, 'black', 186, 255, '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(303, '32', 187, 256, '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(304, '50', 187, 256, '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(305, '100', 187, 256, '2021-07-31 12:21:56', '2021-07-31 12:21:56');

-- --------------------------------------------------------
--
-- Table structure for table `order_statuses`
--

CREATE TABLE IF NOT EXISTS `order_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_statuses`
--

INSERT INTO `order_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'new', 'new order', '2021-07-13 05:43:29', '2021-07-13 05:43:29'),
(2, 'confirmed', 'default value it is to let know that the order is accepted by our  team and it is going to be further processed by shipment department to be shipped for our customer', '2021-07-13 05:47:25', '2021-07-13 05:47:25'),
(3, 'cancel', 'the orderr has been canceled', '2021-07-13 05:47:57', '2021-07-13 05:47:57'),
(4, 'delivered', 'the orderr has been delivered', '2021-07-13 05:48:23', '2021-07-13 05:48:23'),
(5, 'pending', 'the orderr has not be confirmed', '2021-07-13 05:48:45', '2021-07-13 05:48:45'),
(6, 'closed', 'the order has been successfully delivered and passed the return issued date.', '2021-07-13 05:49:24', '2021-07-13 05:49:24');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pin` int(11) NOT NULL,
  `expected_time` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL,
  `return_end_date` datetime NOT NULL,
  `employee_id` bigint(20) UNSIGNED DEFAULT NULL,
  `buyer_id` bigint(20) UNSIGNED NOT NULL,
  `payment_detail_id` bigint(20) UNSIGNED NOT NULL,
  `order_status_id` bigint(20) UNSIGNED NOT NULL,
  `shipping_address_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `pin`, `expected_time`, `delivered_at`, `return_end_date`, `employee_id`, `buyer_id`, `payment_detail_id`, `order_status_id`, `shipping_address_id`, `created_at`, `updated_at`) VALUES
(4, 0, '2012-03-03 00:00:00', NULL, '2012-03-03 00:00:00', NULL, 1, 4, 1, 25, '2021-07-19 03:50:46', '2021-07-19 03:50:46'),
(5, 0, '2012-03-03 00:00:00', NULL, '2012-03-03 00:00:00', NULL, 1, 5, 1, 26, '2021-07-19 03:53:20', '2021-07-19 03:53:20'),
(6, 0, '2012-03-03 00:00:00', NULL, '2012-03-03 00:00:00', NULL, 1, 6, 1, 27, '2021-07-19 03:55:42', '2021-07-19 03:55:42'),
(7, 0, '2012-03-03 00:00:00', NULL, '2012-03-03 00:00:00', NULL, 1, 7, 1, 28, '2021-07-19 04:00:10', '2021-07-19 04:00:10'),
(8, 0, '2012-03-03 00:00:00', NULL, '2012-03-03 00:00:00', NULL, 1, 8, 1, 29, '2021-07-19 04:42:06', '2021-07-19 04:42:06'),
(9, 850, '2012-03-03 00:00:00', NULL, '2012-03-03 00:00:00', NULL, 1, 9, 1, 30, '2021-07-19 04:45:34', '2021-07-19 04:45:34'),
(10, 922, '2012-03-03 00:00:00', NULL, '2012-03-03 00:00:00', NULL, 1, 10, 1, 31, '2021-07-19 04:45:37', '2021-07-19 04:45:37');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE IF NOT EXISTS `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_sku_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------


--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


CREATE TABLE IF NOT EXISTS `payment_type_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payment_type_statuses`
--

INSERT INTO `payment_type_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'active', 'payment type is active', '2021-07-13 05:57:43', '2021-07-13 05:57:43'),
(2, 'inactive', 'payment type is in active', '2021-07-13 05:58:17', '2021-07-13 05:58:17');

-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `payment_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `payment_type_status_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payment_types`
--

INSERT INTO `payment_types` (`id`, `name`, `description`, `payment_type_status_id`, `created_at`, `updated_at`) VALUES
(1, 'cbe', 'u can pay with cbe', 1, '2021-07-18 11:19:13', '2021-07-18 11:19:13'),
(2, 'credit card', 'u can pay with cc', 1, '2021-07-18 11:19:32', '2021-07-18 11:19:32');

--
-- Table structure for table `payment_details`
--

CREATE TABLE IF NOT EXISTS `payment_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `amount` double NOT NULL,
  `payment_type_id` bigint(20) UNSIGNED NOT NULL,
  `billing_address_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `payment_details`
--

INSERT INTO `payment_details` (`id`, `amount`, `payment_type_id`, `billing_address_id`, `created_at`, `updated_at`) VALUES
(4, 2000, 2, NULL, '2021-07-19 03:50:46', '2021-07-19 03:50:46'),
(5, 2000, 2, NULL, '2021-07-19 03:53:20', '2021-07-19 03:53:20'),
(6, 2000, 2, NULL, '2021-07-19 03:55:42', '2021-07-19 03:55:42'),
(7, 2000, 2, NULL, '2021-07-19 04:00:10', '2021-07-19 04:00:10'),
(8, 2000, 2, NULL, '2021-07-19 04:42:06', '2021-07-19 04:42:06'),
(9, 2000, 2, NULL, '2021-07-19 04:45:34', '2021-07-19 04:45:34'),
(10, 2000, 2, NULL, '2021-07-19 04:45:37', '2021-07-19 04:45:37');

-- --------------------------------------------------------

--
-- Table structure for table `payment_types`
--


-- --------------------------------------------------------

--
-- Table structure for table `payment_type_statuses`
--


-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE IF NOT EXISTS `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'delete product', 'this permission gives the ablity to delete products', '2021-07-12 05:05:02', '2021-07-12 05:05:02'),
(2, 'delete customer', 'this permission gives the ablity to delete products', '2021-07-12 05:05:14', '2021-07-12 05:05:14'),
(3, 'delete vendor', 'this permission gives the ablity to delete vendor', '2021-07-12 05:05:30', '2021-07-12 05:05:30'),
(4, 'view vendor', 'this permission gives the ablity to view vendor', '2021-07-12 05:05:50', '2021-07-12 05:05:50'),
(5, 'update vendor', 'this permission gives the ablity to update vendor', '2021-07-12 05:06:16', '2021-07-12 05:06:16'),
(6, 'update  product', 'this permission gives the ablity to update product', '2021-07-12 05:06:33', '2021-07-12 05:06:33'),
(7, 'view  product', 'this permission gives the ablity to view product', '2021-07-12 05:06:53', '2021-07-12 05:06:53'),
(9, 'add product', 'this permission gives the ablity to add product', '2021-07-12 06:12:39', '2021-07-12 06:12:39'),
(11, 'view order', 'this permission gives the ablity to view order', '2021-07-12 06:13:48', '2021-07-12 06:13:48'),
(12, 'delete order', 'this permission gives the ablity to delete order', '2021-07-12 06:14:13', '2021-07-12 06:14:13'),
(13, 'update order', 'this permission gives the ablity to update order', '2021-07-12 06:14:35', '2021-07-12 06:14:35'),
(14, 'all', 'will have a permission to do everything in database', '2021-07-12 06:20:53', '2021-07-12 06:20:53');

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE IF NOT EXISTS `permission_role` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `permission_role`
--

INSERT INTO `permission_role` (`id`, `role_id`, `permission_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 1, 6, NULL, NULL),
(3, 1, 7, NULL, NULL),
(4, 1, 9, NULL, NULL),
(5, 2, 11, NULL, NULL),
(6, 2, 12, NULL, NULL),
(7, 2, 13, NULL, NULL),
(8, 3, 14, NULL, NULL),
(9, 4, 4, NULL, NULL),
(10, 4, 5, NULL, NULL),
(11, 4, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------


--
-- Table structure for table `refunds`
--

CREATE TABLE IF NOT EXISTS `refunds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `return_order_id` bigint(20) UNSIGNED NOT NULL,
  `payment_type_id` bigint(20) UNSIGNED NOT NULL,
  `paid_date` datetime NOT NULL,
  `amount` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `refund_items`
--

CREATE TABLE IF NOT EXISTS `refund_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `refund_id` bigint(20) UNSIGNED NOT NULL,
  `return_item_id` bigint(20) UNSIGNED NOT NULL,
  `refunded_item_quantity` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `return_items`
--

CREATE TABLE IF NOT EXISTS `return_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `return_order_id` bigint(20) UNSIGNED NOT NULL,
  `order_item_id` bigint(20) UNSIGNED NOT NULL,
  `return_item_status_id` bigint(20) UNSIGNED NOT NULL,
  `buyer_reason` text COLLATE utf8_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `accepted_quantity` int(11) DEFAULT NULL,
  `organization_reason` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `return_item_statuses`
--

CREATE TABLE IF NOT EXISTS `return_item_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `return_item_statuses`
--

INSERT INTO `return_item_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'accepted', 'when an item returned from user and accepted it\'s return.', '2021-07-13 04:52:40', '2021-07-13 04:52:40'),
(2, 'rejected', 'when an item returned from user and buyer is rejected due to the fault of buyer', '2021-07-13 04:53:39', '2021-07-13 04:53:39');

-- --------------------------------------------------------

--
-- Table structure for table `return_methodes`
--

CREATE TABLE IF NOT EXISTS `return_methodes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `return_orders`
--

CREATE TABLE IF NOT EXISTS `return_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `return_status_id` bigint(20) UNSIGNED NOT NULL,
  `return_methode_id` bigint(20) UNSIGNED NOT NULL,
  `payment_type_id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `return_issued_date` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `return_statuses`
--

CREATE TABLE IF NOT EXISTS `return_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `return_statuses`
--

INSERT INTO `return_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'tobepicked', 'our delivery boy did not pick it yet', '2021-07-13 05:21:18', '2021-07-13 05:21:18'),
(2, 'tobedropped', 'a buyer will be drop it in our ware house near by.', '2021-07-13 05:22:14', '2021-07-13 05:22:14'),
(3, 'tobeprocessed', 'a product is in our hand.it is going to be evaluate.', '2021-07-13 05:23:49', '2021-07-13 05:23:49');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE IF NOT EXISTS `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rate` double NOT NULL,
  `buyer_id` bigint(20) UNSIGNED NOT NULL,
  `review_status_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `product_name`, `description`, `title`, `rate`, `buyer_id`, `review_status_id`, `created_at`, `updated_at`) VALUES
(2, 'tishert', 'worest product i have ever seen', 'bad product', 1, 1, 1, '2021-07-18 05:51:58', '2021-07-18 05:51:58'),
(3, 'tishert', 'best product i have ever seen', 'good product', 4, 2, 1, '2021-07-18 06:26:14', '2021-07-18 06:26:14');

-- --------------------------------------------------------

--
-- Table structure for table `review_statuses`
--

CREATE TABLE IF NOT EXISTS `review_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `review_statuses`
--

INSERT INTO `review_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'accept', 'review is accpted', '2021-07-13 05:28:36', '2021-07-13 05:28:36'),
(2, 'reject', 'review is rejected due to hatefull contents', '2021-07-13 05:30:07', '2021-07-13 05:30:07');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'product manager', 'manage products', '2021-07-12 04:36:44', '2021-07-12 04:36:44'),
(2, 'order manager', 'manage order', '2021-07-12 04:37:06', '2021-07-12 04:37:06'),
(3, 'admin', 'manage a system', '2021-07-12 04:37:53', '2021-07-12 04:37:53'),
(4, 'vendor manager', 'manage a vendor', '2021-07-12 04:38:31', '2021-07-12 04:38:31');

-- --------------------------------------------------------

--
-- Table structure for table `shipping_addresses`
--

CREATE TABLE IF NOT EXISTS `shipping_addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `region` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `zone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sub_city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `zip_cod` int(11) NOT NULL,
  `kebele` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `village` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `longitude` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `latitude` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `shipping_addresses`
--

INSERT INTO `shipping_addresses` (`id`, `country`, `region`, `zone`, `city`, `sub_city`, `zip_cod`, `kebele`, `village`, `longitude`, `latitude`, `description`, `created_at`, `updated_at`) VALUES
(1, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:20:08', '2021-07-18 12:20:08'),
(2, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:21:38', '2021-07-18 12:21:38'),
(3, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:22:27', '2021-07-18 12:22:27'),
(4, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:23:29', '2021-07-18 12:23:29'),
(5, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:27:07', '2021-07-18 12:27:07'),
(6, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:27:54', '2021-07-18 12:27:54'),
(7, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:32:02', '2021-07-18 12:32:02'),
(8, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:33:09', '2021-07-18 12:33:09'),
(9, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:39:32', '2021-07-18 12:39:32'),
(10, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:51:53', '2021-07-18 12:51:53'),
(11, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:53:44', '2021-07-18 12:53:44'),
(12, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:54:54', '2021-07-18 12:54:54'),
(13, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 12:55:48', '2021-07-18 12:55:48'),
(14, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 13:20:32', '2021-07-18 13:20:32'),
(15, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-18 13:23:38', '2021-07-18 13:23:38'),
(16, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 03:06:32', '2021-07-19 03:06:32'),
(17, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 03:16:02', '2021-07-19 03:16:02'),
(20, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 03:33:51', '2021-07-19 03:33:51'),
(21, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 03:33:52', '2021-07-19 03:33:52'),
(25, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 03:50:46', '2021-07-19 03:50:46'),
(26, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 03:53:20', '2021-07-19 03:53:20'),
(27, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 03:55:42', '2021-07-19 03:55:42'),
(28, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 04:00:10', '2021-07-19 04:00:10'),
(29, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 04:42:06', '2021-07-19 04:42:06'),
(30, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 04:45:34', '2021-07-19 04:45:34'),
(31, 'ethiopia', 'amhara', 'east Gojjam', 'amanuel', 'embule', 1212, 'embule giorgis', 'gongo', '22', '22', 'nothing', '2021-07-19 04:45:37', '2021-07-19 04:45:37');

-- --------------------------------------------------------

--
-- Table structure for table `sku_values`
--

CREATE TABLE IF NOT EXISTS `sku_values` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_sku_id` bigint(20) UNSIGNED NOT NULL,
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `option_value_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sku_values`
--

INSERT INTO `sku_values` (`id`, `product_id`, `product_sku_id`, `option_id`, `option_value_id`, `created_at`, `updated_at`) VALUES
(66, 174, 105, 244, 275, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(67, 174, 105, 245, 277, '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(68, 174, 106, 244, 276, '2021-07-31 07:23:07', '2021-07-31 07:23:07'),
(69, 174, 106, 245, 279, '2021-07-31 07:23:07', '2021-07-31 07:23:07'),
(70, 183, 110, 252, 295, '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(71, 183, 111, 252, 296, '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(72, 185, 113, 254, 299, '2021-07-31 12:14:22', '2021-07-31 12:14:22'),
(73, 185, 114, 254, 300, '2021-07-31 12:14:23', '2021-07-31 12:14:23'),
(74, 186, 115, 255, 301, '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(75, 186, 116, 255, 302, '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(76, 187, 117, 256, 303, '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(77, 187, 118, 256, 304, '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(78, 187, 119, 256, 305, '2021-07-31 12:21:56', '2021-07-31 12:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE IF NOT EXISTS `sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `have_product` tinyint(1) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `name`, `slug`, `description`, `have_product`, `category_id`, `created_at`, `updated_at`) VALUES
(14, 'Babies Fashion', 'babies-fashion', 'Baby and other\'s fashion', 0, 14, '2021-07-30 05:20:57', '2021-07-30 05:20:57'),
(19, 'Vegetable', 'vegetable', 'all vegetable', 0, 15, '2021-07-31 05:04:34', '2021-07-31 05:04:34'),
(20, 'Fruit', 'fruit', 'all fruits r here', 0, 15, '2021-07-31 05:06:32', '2021-07-31 05:06:32'),
(21, 'Cereal', 'cereal', 'all cereal here', 0, 15, '2021-07-31 05:08:20', '2021-07-31 05:08:20'),
(22, 'Oil', 'oil', 'all oil here', 0, 15, '2021-07-31 05:09:05', '2021-07-31 05:09:05'),
(23, 'Cleaning', 'cleaning', 'Cleaning material', 0, 13, '2021-07-31 06:40:34', '2021-07-31 06:40:34'),
(24, 'Stationary', 'stationary', 'stationary material', 0, 13, '2021-07-31 06:42:43', '2021-07-31 06:42:43'),
(25, 'Deodorant', 'deodorant', 'deodorant for men and women', 0, 12, '2021-07-31 11:51:17', '2021-07-31 11:51:17'),
(26, 'Spice', 'spice', 'all spice listed here', 0, 15, '2021-07-31 11:52:53', '2021-07-31 11:52:53'),
(27, 'meat', 'meat', 'boild meat', 0, 16, '2021-08-02 09:12:05', '2021-08-02 09:12:05');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(7, 'skincare', '', '2021-07-20 06:32:34', '2021-07-20 06:32:34'),
(8, 'footware', '', '2021-07-20 06:32:34', '2021-07-20 06:32:34'),
(9, 'moisturizer', '', '2021-07-20 06:32:34', '2021-07-20 06:32:34'),
(10, 'blackpeople', '', '2021-07-20 06:32:34', '2021-07-20 06:32:34'),
(11, 'naturalhair', '', '2021-07-20 06:32:34', '2021-07-20 06:32:34'),
(13, 'tags', '', '2021-07-21 11:59:54', '2021-07-21 11:59:54'),
(14, 'here', '', '2021-07-21 11:59:54', '2021-07-21 11:59:54'),
(17, 'tag1', '', '2021-07-21 12:08:29', '2021-07-21 12:08:29'),
(18, 'tag2', '', '2021-07-21 12:08:29', '2021-07-21 12:08:29'),
(19, 'tag3', '', '2021-07-21 12:08:29', '2021-07-21 12:08:29'),
(21, 'tag5', '', '2021-07-21 12:12:29', '2021-07-21 12:12:29'),
(22, 'tag6', '', '2021-07-21 12:12:29', '2021-07-21 12:12:29'),
(23, 'tag7', '', '2021-07-21 12:12:29', '2021-07-21 12:12:29'),
(25, 'tag90', '', '2021-07-21 12:24:00', '2021-07-21 12:24:00'),
(26, 'tag96', '', '2021-07-21 12:24:00', '2021-07-21 12:24:00'),
(27, 'tag97', '', '2021-07-21 12:24:00', '2021-07-21 12:24:00'),
(28, 'tag901', '', '2021-07-21 12:32:33', '2021-07-21 12:32:33'),
(29, 'tag961', '', '2021-07-21 12:32:33', '2021-07-21 12:32:33'),
(30, 'tag971', '', '2021-07-21 12:32:33', '2021-07-21 12:32:33'),
(31, 'tag9012', '', '2021-07-21 12:33:09', '2021-07-21 12:33:09'),
(32, 'tag9621', '', '2021-07-21 12:33:09', '2021-07-21 12:33:09'),
(33, 'tag9712', '', '2021-07-21 12:33:09', '2021-07-21 12:33:09'),
(35, 'rdrs', '', '2021-07-21 12:36:48', '2021-07-21 12:36:48'),
(36, 'efgh', '', '2021-07-21 12:36:48', '2021-07-21 12:36:48'),
(37, 'sdfg', '', '2021-07-21 12:36:48', '2021-07-21 12:36:48'),
(39, 'rdrds', '', '2021-07-21 12:41:31', '2021-07-21 12:41:31'),
(40, 'efdgh', '', '2021-07-21 12:41:31', '2021-07-21 12:41:31'),
(41, 'sddfg', '', '2021-07-21 12:41:31', '2021-07-21 12:41:31'),
(43, 'fdf', '', '2021-07-21 12:48:56', '2021-07-21 12:48:56'),
(44, 'dgd', '', '2021-07-21 12:48:56', '2021-07-21 12:48:56'),
(45, 'djdj', '', '2021-07-21 12:48:56', '2021-07-21 12:48:56'),
(48, 'sadfasdf1', '', '2021-07-21 12:57:20', '2021-07-21 12:57:20'),
(50, 'sadfasdf1dasdf', '', '2021-07-21 13:02:20', '2021-07-21 13:02:20'),
(51, 'sadfasdf1dasdf78dfd', '', '2021-07-21 13:11:36', '2021-07-21 13:11:36'),
(52, 'werwer34', '', '2021-07-21 13:15:07', '2021-07-21 13:15:07'),
(53, 'eqwerqwe19', '', '2021-07-21 13:18:41', '2021-07-21 13:18:41'),
(54, 'eqwerqwe19rtwe89', '', '2021-07-21 13:20:57', '2021-07-21 13:20:57'),
(55, 'dahjgh56756753', '', '2021-07-22 04:21:01', '2021-07-22 04:21:01'),
(56, 'asdf565s', '', '2021-07-22 04:32:17', '2021-07-22 04:32:17'),
(57, 'a0448', '', '2021-07-22 04:32:17', '2021-07-22 04:32:17'),
(58, '.o0854', '', '2021-07-22 04:40:11', '2021-07-22 04:40:11'),
(59, 'alj', '', '2021-07-22 04:50:48', '2021-07-22 04:50:48'),
(60, '098', '', '2021-07-22 04:57:48', '2021-07-22 04:57:48'),
(61, '6456dsf', '', '2021-07-22 05:04:12', '2021-07-22 05:04:12'),
(62, 'hereert', '', '2021-07-22 05:06:44', '2021-07-22 05:06:44'),
(63, ' retthere', '', '2021-07-22 05:06:44', '2021-07-22 05:06:44'),
(64, '45345sdfa', '', '2021-07-22 05:10:01', '2021-07-22 05:10:01'),
(66, '45345sdfafgg', '', '2021-07-22 05:12:56', '2021-07-22 05:12:56'),
(68, '45345sdfafgg688', '', '2021-07-22 05:16:53', '2021-07-22 05:16:53'),
(69, 'poiujkl', '', '2021-07-22 05:26:57', '2021-07-22 05:26:57'),
(70, '', '', '2021-07-22 05:30:44', '2021-07-22 05:30:44'),
(71, 'gfdffgf520-', '', '2021-07-22 05:35:09', '2021-07-22 05:35:09'),
(72, 'rgh90-hfj', '', '2021-07-22 05:47:33', '2021-07-22 05:47:33'),
(73, 'vbc45', '', '2021-07-22 05:54:46', '2021-07-22 05:54:46'),
(74, 'ewrw8970', '', '2021-07-22 06:05:48', '2021-07-22 06:05:48'),
(76, 'ewrw8970r', '', '2021-07-22 06:09:06', '2021-07-22 06:09:06'),
(77, 'sd4332', '', '2021-07-22 06:30:28', '2021-07-22 06:30:28'),
(78, 'sd3gsasdf', '', '2021-07-22 06:32:27', '2021-07-22 06:32:27'),
(80, 'sd3gsasdfs', '', '2021-07-22 06:32:51', '2021-07-22 06:32:51'),
(81, 'sdf342sfad', '', '2021-07-22 06:53:54', '2021-07-22 06:53:54'),
(82, '1q', '', '2021-07-22 07:42:11', '2021-07-22 07:42:11'),
(84, '1qbn', '', '2021-07-22 07:45:00', '2021-07-22 07:45:00'),
(85, 's456', '', '2021-07-22 07:48:36', '2021-07-22 07:48:36'),
(86, 'hhhhipop[', '', '2021-07-22 07:56:52', '2021-07-22 07:56:52'),
(87, 'hhhhipop[jk', '', '2021-07-22 08:01:11', '2021-07-22 08:01:11'),
(88, 'jjj', '', '2021-07-22 08:04:21', '2021-07-22 08:04:21'),
(90, 'jjjii', '', '2021-07-22 08:06:56', '2021-07-22 08:06:56'),
(91, 'dfghjh09', '', '2021-07-22 08:09:31', '2021-07-22 08:09:31'),
(92, 'dfghjh09iy', '', '2021-07-22 08:11:08', '2021-07-22 08:11:08'),
(93, 'dfghjh09iyhj', '', '2021-07-22 08:11:53', '2021-07-22 08:11:53'),
(94, 'ff', '', '2021-07-22 08:14:11', '2021-07-22 08:14:11'),
(95, 'nnn', '', '2021-07-22 08:17:02', '2021-07-22 08:17:02'),
(96, 'nnnn', '', '2021-07-22 08:19:07', '2021-07-22 08:19:07'),
(97, 'btr', '', '2021-07-22 08:25:12', '2021-07-22 08:25:12'),
(98, 'btr-8', '', '2021-07-22 08:28:31', '2021-07-22 08:28:31'),
(99, 'oiuiu', '', '2021-07-22 08:33:21', '2021-07-22 08:33:21'),
(100, 'oiuiubv', '', '2021-07-22 08:34:46', '2021-07-22 08:34:46'),
(102, 'oiuiubvfghj', '', '2021-07-22 08:38:26', '2021-07-22 08:38:26'),
(103, 'afsdf45345', '', '2021-07-22 10:35:21', '2021-07-22 10:35:21'),
(105, 'afsdf45345t6', '', '2021-07-22 10:37:16', '2021-07-22 10:37:16'),
(106, 'afsdf45345t6yu', '', '2021-07-22 10:38:11', '2021-07-22 10:38:11'),
(107, 'dsf90-65', '', '2021-07-22 10:50:40', '2021-07-22 10:50:40'),
(108, 'asdfs09fdg', '', '2021-07-22 10:56:30', '2021-07-22 10:56:30'),
(109, 'asdfs09fdgasdf75456', '', '2021-07-22 10:58:04', '2021-07-22 10:58:04'),
(110, 'lsdkfj4537948', '', '2021-07-22 13:11:50', '2021-07-22 13:11:50'),
(111, 'lsdkfj453794889965', '', '2021-07-22 13:13:15', '2021-07-22 13:13:15'),
(113, 'electronics', '', '2021-07-27 07:06:05', '2021-07-27 07:06:05'),
(114, 'phone', '', '2021-07-27 07:06:05', '2021-07-27 07:06:05'),
(115, 'smart', '', '2021-07-27 07:06:05', '2021-07-27 07:06:05'),
(116, 'electronics1', '', '2021-07-27 07:06:56', '2021-07-27 07:06:56'),
(117, 'phone1', '', '2021-07-27 07:06:56', '2021-07-27 07:06:56'),
(118, 'smart1', '', '2021-07-27 07:06:56', '2021-07-27 07:06:56'),
(119, 'electronics11', '', '2021-07-27 07:07:45', '2021-07-27 07:07:45'),
(120, 'phone11', '', '2021-07-27 07:07:45', '2021-07-27 07:07:45'),
(121, 'smart11', '', '2021-07-27 07:07:45', '2021-07-27 07:07:45'),
(122, 'd43', '', '2021-07-27 08:02:40', '2021-07-27 08:02:40'),
(123, 'd43ds', '', '2021-07-27 08:03:51', '2021-07-27 08:03:51'),
(124, '588[iy', '', '2021-07-27 08:47:53', '2021-07-27 08:47:53'),
(126, 'maize21', '', '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(127, 'bokolo12', '', '2021-07-31 07:23:06', '2021-07-31 07:23:06'),
(128, 'com21', '', '2021-07-31 08:32:36', '2021-07-31 08:32:36'),
(129, 'com21ds', '', '2021-07-31 08:33:41', '2021-07-31 08:33:41'),
(130, 'com21dss', '', '2021-07-31 08:34:54', '2021-07-31 08:34:54'),
(131, 'com21dssdasd', '', '2021-07-31 08:36:24', '2021-07-31 08:36:24'),
(132, 'ban', '', '2021-07-31 09:15:25', '2021-07-31 09:15:25'),
(133, ' fruit', '', '2021-07-31 09:15:25', '2021-07-31 09:15:25'),
(135, 'banv', '', '2021-07-31 09:19:14', '2021-07-31 09:19:14'),
(136, 'dg fruit', '', '2021-07-31 09:19:14', '2021-07-31 09:19:14'),
(137, 'baasnv', '', '2021-07-31 09:30:26', '2021-07-31 09:30:26'),
(138, 'dg fruist', '', '2021-07-31 09:30:26', '2021-07-31 09:30:26'),
(139, 'aramba', '', '2021-07-31 12:02:47', '2021-07-31 12:02:47'),
(140, '12w', '', '2021-07-31 12:09:19', '2021-07-31 12:09:19'),
(141, '12wdd', '', '2021-07-31 12:14:22', '2021-07-31 12:14:22'),
(142, 'd5y', '', '2021-07-31 12:16:05', '2021-07-31 12:16:05'),
(143, 'exbooks', '', '2021-07-31 12:21:56', '2021-07-31 12:21:56'),
(144, 'e', '', '2021-07-31 12:31:08', '2021-07-31 12:31:08'),
(145, 'herre', '', '2021-07-31 12:38:58', '2021-07-31 12:38:58'),
(146, ' therye', '', '2021-07-31 12:38:58', '2021-07-31 12:38:58'),
(147, '4t', '', '2021-07-31 17:40:27', '2021-07-31 17:40:27'),
(148, 'fghfghhgghjttr', '', '2021-08-02 06:30:19', '2021-08-02 06:30:19'),
(150, 'fghfghhgghjttrtgc0987y', '', '2021-08-02 06:32:39', '2021-08-02 06:32:39'),
(151, 'oipoikju87', '', '2021-08-02 06:43:57', '2021-08-02 06:43:57');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE IF NOT EXISTS `units` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `abbrevation` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`, `description`, `abbrevation`, `created_at`, `updated_at`) VALUES
(36, 'Kilo gram', 'measure of mass', 'Kg', '2021-07-30 10:00:51', '2021-07-30 10:00:51'),
(37, 'Litter', 'global standard to measure liquid and gas', 'l', '2021-07-30 10:17:23', '2021-07-30 10:17:23'),
(38, 'Count', 'measure individual discrete units', 'c', '2021-07-30 10:19:19', '2021-07-30 10:19:19');

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE IF NOT EXISTS `vendors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `contact_first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_phone_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `campany_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fax` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `company_phone_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address_id` bigint(20) UNSIGNED NOT NULL,
  `vendor_status_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `contact_first_name`, `contact_last_name`, `date_of_birth`, `email`, `contact_phone_number`, `gender`, `password`, `campany_name`, `url`, `fax`, `company_phone_number`, `address_id`, `vendor_status_id`, `created_at`, `updated_at`) VALUES
(1, 'elon', 'musk', '1989-09-09', 'elonmusk@gmail.com', '0948266669', 'Male', '1234', 'nike', 'nike.com', '091919191', '0911111111', 2, 1, '2021-07-15 11:04:11', '2021-07-15 11:04:11');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_balances`
--

CREATE TABLE IF NOT EXISTS `vendor_balances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `balance` double NOT NULL,
  `is_paid` tinyint(1) NOT NULL,
  `vendor_id` bigint(20) UNSIGNED NOT NULL,
  `order_item_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vendor_statuses`
--

CREATE TABLE IF NOT EXISTS `vendor_statuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `vendor_statuses`
--

INSERT INTO `vendor_statuses` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'active', 'normal vendor', '2021-07-13 06:15:44', '2021-07-13 06:15:44'),
(2, 'blocked', 'blocked vendor', '2021-07-13 06:16:04', '2021-07-13 06:16:04');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE IF NOT EXISTS `wishlists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `buyer_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wishlist_items`
--

CREATE TABLE IF NOT EXISTS `wishlist_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `wishlist_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_sku_id` bigint(20) UNSIGNED NOT NULL,
  `modified_at` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `billing_addresses`
--
ALTER TABLE `billing_addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buyers`
--
ALTER TABLE `buyers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `buyers_email_unique` (`email`),
  ADD UNIQUE KEY `buyers_phone_number_unique` (`phone_number`),
  ADD KEY `buyers_address_id_foreign` (`address_id`),
  ADD KEY `buyers_buyer_status_id_foreign` (`buyer_status_id`);

--
-- Indexes for table `buyer_statuses`
--
ALTER TABLE `buyer_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `buyer_statuses_name_unique` (`name`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_items_cart_session_id_foreign` (`cart_session_id`),
  ADD KEY `cart_items_product_id_foreign` (`product_id`),
  ADD KEY `cart_items_product_sku_id_foreign` (`product_sku_id`);

--
-- Indexes for table `cart_sessions`
--
ALTER TABLE `cart_sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_sessions_buyer_id_foreign` (`buyer_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`);

--
-- Indexes for table `commissions`
--
ALTER TABLE `commissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `commissions_order_item_id_foreign` (`order_item_id`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `discounts_product_id_foreign` (`product_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employees_email_unique` (`email`),
  ADD UNIQUE KEY `employees_phone_number_unique` (`phone_number`),
  ADD KEY `employees_address_id_foreign` (`address_id`),
  ADD KEY `employees_role_id_foreign` (`role_id`),
  ADD KEY `employees_employee_status_id_foreign` (`employee_status_id`);

--
-- Indexes for table `employee_statuses`
--
ALTER TABLE `employee_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employee_statuses_name_unique` (`name`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_product_id_foreign` (`product_id`),
  ADD KEY `images_product_sku_id_foreign` (`product_sku_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `options_product_id_foreign` (`product_id`);

--
-- Indexes for table `option_values`
--
ALTER TABLE `option_values`
  ADD PRIMARY KEY (`id`),
  ADD KEY `option_values_product_id_foreign` (`product_id`),
  ADD KEY `option_values_option_id_foreign` (`option_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_employee_id_foreign` (`employee_id`),
  ADD KEY `orders_buyer_id_foreign` (`buyer_id`),
  ADD KEY `orders_order_status_id_foreign` (`order_status_id`),
  ADD KEY `orders_shipping_address_id_foreign` (`shipping_address_id`),
  ADD KEY `payment_detail_id` (`payment_detail_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`),
  ADD KEY `order_items_product_id_foreign` (`product_id`),
  ADD KEY `order_items_product_sku_id_foreign` (`product_sku_id`);

--
-- Indexes for table `order_statuses`
--
ALTER TABLE `order_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_statuses_name_unique` (`name`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payment_details`
--
ALTER TABLE `payment_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payment_details_payment_type_id_foreign` (`payment_type_id`),
  ADD KEY `payment_details_billing_address_id_foreign` (`billing_address_id`);

--
-- Indexes for table `payment_types`
--
ALTER TABLE `payment_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payment_types_name_unique` (`name`),
  ADD KEY `payment_types_payment_type_status_id_foreign` (`payment_type_status_id`);

--
-- Indexes for table `payment_type_statuses`
--
ALTER TABLE `payment_type_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payment_type_statuses_name_unique` (`name`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_unique` (`name`);

--
-- Indexes for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`id`),
  ADD KEY `permission_roles_role_id_foreign` (`role_id`),
  ADD KEY `permission_roles_permission_id_foreign` (`permission_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_unit_id_foreign` (`unit_id`),
  ADD KEY `products_vendor_id_foreign` (`vendor_id`),
  ADD KEY `products_sub_category_id_foreign` (`sub_category_id`),
  ADD KEY `products_product_status_id_foreign` (`product_status_id`),
  ADD KEY `products_product_visiblity_status_id_foreign` (`product_visiblity_status_id`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `product_skus`
--
ALTER TABLE `product_skus`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_skus_sku_unique` (`sku`),
  ADD KEY `product_skus_product_id_foreign` (`product_id`);

--
-- Indexes for table `product_statuses`
--
ALTER TABLE `product_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_statuses_name_unique` (`name`);

--
-- Indexes for table `product_tag`
--
ALTER TABLE `product_tag`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_tags_product_id_foreign` (`product_id`),
  ADD KEY `product_tags_tag_id_foreign` (`tag_id`);

--
-- Indexes for table `product_visiblity_statuses`
--
ALTER TABLE `product_visiblity_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `product_visiblity_statuses_name_unique` (`name`);

--
-- Indexes for table `refunds`
--
ALTER TABLE `refunds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `refunds_return_order_id_foreign` (`return_order_id`),
  ADD KEY `refunds_payment_type_id_foreign` (`payment_type_id`);

--
-- Indexes for table `refund_items`
--
ALTER TABLE `refund_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `refund_items_refund_id_foreign` (`refund_id`),
  ADD KEY `refund_items_return_item_id_foreign` (`return_item_id`);

--
-- Indexes for table `return_items`
--
ALTER TABLE `return_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `return_items_return_order_id_foreign` (`return_order_id`),
  ADD KEY `return_items_order_item_id_foreign` (`order_item_id`),
  ADD KEY `return_items_return_item_status_id_foreign` (`return_item_status_id`);

--
-- Indexes for table `return_item_statuses`
--
ALTER TABLE `return_item_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `return_item_statuses_name_unique` (`name`);

--
-- Indexes for table `return_methodes`
--
ALTER TABLE `return_methodes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `return_methodes_name_unique` (`name`);

--
-- Indexes for table `return_orders`
--
ALTER TABLE `return_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `return_orders_return_status_id_foreign` (`return_status_id`),
  ADD KEY `return_orders_return_methode_id_foreign` (`return_methode_id`),
  ADD KEY `return_orders_payment_type_id_foreign` (`payment_type_id`),
  ADD KEY `return_orders_order_id_foreign` (`order_id`);

--
-- Indexes for table `return_statuses`
--
ALTER TABLE `return_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `return_statuses_name_unique` (`name`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_buyer_id_foreign` (`buyer_id`),
  ADD KEY `reviews_review_status_id_foreign` (`review_status_id`);

--
-- Indexes for table `review_statuses`
--
ALTER TABLE `review_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `review_statuses_name_unique` (`name`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sku_values`
--
ALTER TABLE `sku_values`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sku_values_product_id_foreign` (`product_id`),
  ADD KEY `sku_values_product_sku_id_foreign` (`product_sku_id`),
  ADD KEY `sku_values_option_id_foreign` (`option_id`),
  ADD KEY `option_value_id` (`option_value_id`) USING BTREE;

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sub_categories_name_unique` (`name`),
  ADD KEY `sub_categories_category_id_foreign` (`category_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tags_name_unique` (`name`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `units_name_unique` (`name`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vendors_email_unique` (`email`),
  ADD UNIQUE KEY `vendors_contact_phone_number_unique` (`contact_phone_number`),
  ADD KEY `vendors_address_id_foreign` (`address_id`),
  ADD KEY `vendors_vendor_status_id_foreign` (`vendor_status_id`);

--
-- Indexes for table `vendor_balances`
--
ALTER TABLE `vendor_balances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendor_balances_vendor_id_foreign` (`vendor_id`),
  ADD KEY `vendor_balances_order_item_id_foreign` (`order_item_id`);

--
-- Indexes for table `vendor_statuses`
--
ALTER TABLE `vendor_statuses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vendor_statuses_name_unique` (`name`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wishlists_buyer_id_foreign` (`buyer_id`);

--
-- Indexes for table `wishlist_items`
--
ALTER TABLE `wishlist_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wishlist_items_wishlist_id_foreign` (`wishlist_id`),
  ADD KEY `wishlist_items_product_id_foreign` (`product_id`),
  ADD KEY `wishlist_items_product_sku_id_foreign` (`product_sku_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `billing_addresses`
--
ALTER TABLE `billing_addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `buyers`
--
ALTER TABLE `buyers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `buyer_statuses`
--
ALTER TABLE `buyer_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart_sessions`
--
ALTER TABLE `cart_sessions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `commissions`
--
ALTER TABLE `commissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employee_statuses`
--
ALTER TABLE `employee_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=257;

--
-- AUTO_INCREMENT for table `option_values`
--
ALTER TABLE `option_values`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=306;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `order_statuses`
--
ALTER TABLE `order_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payment_details`
--
ALTER TABLE `payment_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `payment_types`
--
ALTER TABLE `payment_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `payment_type_statuses`
--
ALTER TABLE `payment_type_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `permission_role`
--
ALTER TABLE `permission_role`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT for table `product_skus`
--
ALTER TABLE `product_skus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT for table `product_statuses`
--
ALTER TABLE `product_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_tag`
--
ALTER TABLE `product_tag`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `product_visiblity_statuses`
--
ALTER TABLE `product_visiblity_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `refunds`
--
ALTER TABLE `refunds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `refund_items`
--
ALTER TABLE `refund_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `return_items`
--
ALTER TABLE `return_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `return_item_statuses`
--
ALTER TABLE `return_item_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `return_methodes`
--
ALTER TABLE `return_methodes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `return_orders`
--
ALTER TABLE `return_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `return_statuses`
--
ALTER TABLE `return_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `review_statuses`
--
ALTER TABLE `review_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `sku_values`
--
ALTER TABLE `sku_values`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT for table `units`
--
ALTER TABLE `units`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vendor_balances`
--
ALTER TABLE `vendor_balances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendor_statuses`
--
ALTER TABLE `vendor_statuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wishlist_items`
--
ALTER TABLE `wishlist_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buyers`
--
ALTER TABLE `buyers`
  ADD CONSTRAINT `buyers_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `buyers_buyer_status_id_foreign` FOREIGN KEY (`buyer_status_id`) REFERENCES `buyer_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `cart_items_cart_session_id_foreign` FOREIGN KEY (`cart_session_id`) REFERENCES `cart_sessions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_items_product_sku_id_foreign` FOREIGN KEY (`product_sku_id`) REFERENCES `product_skus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cart_sessions`
--
ALTER TABLE `cart_sessions`
  ADD CONSTRAINT `cart_sessions_buyer_id_foreign` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `commissions`
--
ALTER TABLE `commissions`
  ADD CONSTRAINT `commissions_order_item_id_foreign` FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `discounts`
--
ALTER TABLE `discounts`
  ADD CONSTRAINT `discounts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employees_employee_status_id_foreign` FOREIGN KEY (`employee_status_id`) REFERENCES `employee_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employees_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `images_product_sku_id_foreign` FOREIGN KEY (`product_sku_id`) REFERENCES `product_skus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `options_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `option_values`
--
ALTER TABLE `option_values`
  ADD CONSTRAINT `option_values_option_id_foreign` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `option_values_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_buyer_id_foreign` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`payment_detail_id`) REFERENCES `payment_details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_order_status_id_foreign` FOREIGN KEY (`order_status_id`) REFERENCES `order_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_shipping_address_id_foreign` FOREIGN KEY (`shipping_address_id`) REFERENCES `shipping_addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_items_product_sku_id_foreign` FOREIGN KEY (`product_sku_id`) REFERENCES `product_skus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payment_details`
--
ALTER TABLE `payment_details`
  ADD CONSTRAINT `payment_details_billing_address_id_foreign` FOREIGN KEY (`billing_address_id`) REFERENCES `billing_addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `payment_details_payment_type_id_foreign` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payment_types`
--
ALTER TABLE `payment_types`
  ADD CONSTRAINT `payment_types_payment_type_status_id_foreign` FOREIGN KEY (`payment_type_status_id`) REFERENCES `payment_type_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_roles_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `permission_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_product_status_id_foreign` FOREIGN KEY (`product_status_id`) REFERENCES `product_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_product_visiblity_status_id_foreign` FOREIGN KEY (`product_visiblity_status_id`) REFERENCES `product_visiblity_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_sub_category_id_foreign` FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `vendors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product_skus`
--
ALTER TABLE `product_skus`
  ADD CONSTRAINT `product_skus_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product_tag`
--
ALTER TABLE `product_tag`
  ADD CONSTRAINT `product_tags_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_tags_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `refunds`
--
ALTER TABLE `refunds`
  ADD CONSTRAINT `refunds_payment_type_id_foreign` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `refunds_return_order_id_foreign` FOREIGN KEY (`return_order_id`) REFERENCES `return_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `refund_items`
--
ALTER TABLE `refund_items`
  ADD CONSTRAINT `refund_items_refund_id_foreign` FOREIGN KEY (`refund_id`) REFERENCES `refunds` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `refund_items_return_item_id_foreign` FOREIGN KEY (`return_item_id`) REFERENCES `return_items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `return_items`
--
ALTER TABLE `return_items`
  ADD CONSTRAINT `return_items_order_item_id_foreign` FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `return_items_return_item_status_id_foreign` FOREIGN KEY (`return_item_status_id`) REFERENCES `return_item_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `return_items_return_order_id_foreign` FOREIGN KEY (`return_order_id`) REFERENCES `return_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `return_orders`
--
ALTER TABLE `return_orders`
  ADD CONSTRAINT `return_orders_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `return_orders_payment_type_id_foreign` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `return_orders_return_methode_id_foreign` FOREIGN KEY (`return_methode_id`) REFERENCES `return_methodes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `return_orders_return_status_id_foreign` FOREIGN KEY (`return_status_id`) REFERENCES `return_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_buyer_id_foreign` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_review_status_id_foreign` FOREIGN KEY (`review_status_id`) REFERENCES `review_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sku_values`
--
ALTER TABLE `sku_values`
  ADD CONSTRAINT `sku_values_option_id_foreign` FOREIGN KEY (`option_id`) REFERENCES `options` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sku_values_option_value_id_foreign` FOREIGN KEY (`option_value_id`) REFERENCES `option_values` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sku_values_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `sku_values_product_sku_id_foreign` FOREIGN KEY (`product_sku_id`) REFERENCES `product_skus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD CONSTRAINT `sub_categories_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vendors`
--
ALTER TABLE `vendors`
  ADD CONSTRAINT `vendors_address_id_foreign` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vendors_vendor_status_id_foreign` FOREIGN KEY (`vendor_status_id`) REFERENCES `vendor_statuses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `vendor_balances`
--
ALTER TABLE `vendor_balances`
  ADD CONSTRAINT `vendor_balances_order_item_id_foreign` FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `vendor_balances_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `vendors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD CONSTRAINT `wishlists_buyer_id_foreign` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wishlist_items`
--
ALTER TABLE `wishlist_items`
  ADD CONSTRAINT `wishlist_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `wishlist_items_product_sku_id_foreign` FOREIGN KEY (`product_sku_id`) REFERENCES `product_skus` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `wishlist_items_wishlist_id_foreign` FOREIGN KEY (`wishlist_id`) REFERENCES `wishlists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
