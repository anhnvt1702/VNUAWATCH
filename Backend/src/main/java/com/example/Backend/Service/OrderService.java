package com.example.Backend.Service;

import com.example.Backend.DTO.MonthlyStatsDTO;
import com.example.Backend.DTO.OrderDTO;
import com.example.Backend.Entity.Order;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


public interface OrderService {
    Order createOrder(OrderDTO dto);
    List<OrderDTO> getOrdersByUserId(Long userId, String keySearch);
    Optional<Order> getOrderByTrackingId(String trackId);
    List<OrderDTO> getAllOrders();
    void updateOrderStatus(Long orderId, String status);
    List<MonthlyStatsDTO> getMonthlyStats(int year);
    void exportMonthlyStatsCsv(HttpServletResponse response, int year)throws IOException;
}
