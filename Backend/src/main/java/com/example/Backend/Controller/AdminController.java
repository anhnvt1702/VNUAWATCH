// com.example.Backend.Controller.AdminController.java
package com.example.Backend.Controller;

import com.example.Backend.DTO.MonthlyStatsDTO;
import com.example.Backend.DTO.StatsResponse;
import com.example.Backend.Repository.UserRepository;
import com.example.Backend.Repository.OrderRepository;
import com.example.Backend.Repository.ProductRepository;
import com.example.Backend.Service.OrderService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderService orderService;

    @GetMapping("/stats")
    public StatsResponse getStats(@RequestParam int year) {

        long userCount = userRepository.count();
        long orderCount = orderRepository.count();
        long productCount = productRepository.count();

        List<MonthlyStatsDTO> monthlyStats = orderService.getMonthlyStats(year);

        return new StatsResponse(
                userCount,
                orderCount,
                productCount,
                monthlyStats
        );
    }

    @GetMapping("/monthly-stats/export")
    public void exportMonthlyStats(
            @RequestParam int year,
            HttpServletResponse response) throws IOException {

        orderService.exportMonthlyStatsCsv(response, year);
    }

}
